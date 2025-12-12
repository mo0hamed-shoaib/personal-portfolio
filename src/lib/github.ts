interface GitHubGraphQLContributionResponse {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        weeks: Array<{
          contributionDays: Array<{
            contributionCount: number;
            contributionLevel: string;
            date: string;
          }>;
        }>;
        totalContributions: number;
      };
    };
  };
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

const GITHUB_USERNAME = "mohamed-g-shoaib";
const GITHUB_API_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

export async function fetchGitHubContributions(
  fromDate: string,
  toDate: string
): Promise<{ contributions: ContributionDay[]; totalContributions: number }> {
  if (!GITHUB_API_TOKEN) {
    throw new Error("Missing GITHUB_ACCESS_TOKEN environment variable.");
  }

  const query = `
    query($username: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                date
              }
            }
            totalContributions
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${GITHUB_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        username: GITHUB_USERNAME,
        from: `${fromDate}T00:00:00Z`,
        to: `${toDate}T23:59:59Z`,
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.statusText}`);
  }

  const result = (await response.json()) as {
    data?: GitHubGraphQLContributionResponse;
    errors?: Array<{ message: string }>;
  };

  if (result.errors) {
    throw new Error(
      `GraphQL errors: ${result.errors.map((e) => e.message).join(", ")}`
    );
  }

  if (!result.data?.user?.contributionsCollection) {
    throw new Error("Incomplete data received from GitHub GraphQL.");
  }

  const contributionDays =
    result.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week) => week.contributionDays
    );

  const mapContributionLevel = (level: string): number => {
    switch (level) {
      case "NONE":
        return 0;
      case "FIRST_QUARTILE":
        return 1;
      case "SECOND_QUARTILE":
        return 2;
      case "THIRD_QUARTILE":
        return 3;
      case "FOURTH_QUARTILE":
        return 4;
      default:
        return 0;
    }
  };

  const contributions: ContributionDay[] = contributionDays.map((day) => ({
    date: day.date,
    count: day.contributionCount,
    level: mapContributionLevel(day.contributionLevel),
  }));

  return {
    contributions,
    totalContributions:
      result.data.user.contributionsCollection.contributionCalendar
        .totalContributions,
  };
}
