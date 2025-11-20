import { NextResponse } from "next/server";
import { cache } from "@/lib/cache";
import { fetchGitHubContributions, type ContributionDay } from "@/lib/github";

interface GitHubActivityApiResponse {
  source: "graphql" | "cache";
  data: ContributionDay[];
  totalContributions: number;
}

const GITHUB_ACTIVITY_CACHE_KEY = "github_activity_data";
const CACHE_TTL_DAILY = 24 * 60 * 60; // 24 hours in seconds

export async function GET(request: Request) {
  const url = new URL(request.url);
  const refreshCache = url.searchParams.get("refresh") === "true";

  if (refreshCache) {
    cache.del(GITHUB_ACTIVITY_CACHE_KEY);
  }

  const cachedData = cache.get<GitHubActivityApiResponse>(
    GITHUB_ACTIVITY_CACHE_KEY,
  );
  if (cachedData && !refreshCache) {
    return NextResponse.json({ ...cachedData, source: "cache" });
  }

  try {
    const today = new Date();
    const eightMonthsAgo = new Date(today);
    eightMonthsAgo.setMonth(today.getMonth() - 8);

    const fromDate = eightMonthsAgo.toISOString().split("T")[0]; // YYYY-MM-DD
    const toDate = today.toISOString().split("T")[0]; // YYYY-MM-DD

    const { contributions, totalContributions } =
      await fetchGitHubContributions(fromDate, toDate);

    const activityData: GitHubActivityApiResponse = {
      source: "graphql",
      data: contributions,
      totalContributions,
    };

    cache.set(GITHUB_ACTIVITY_CACHE_KEY, activityData, CACHE_TTL_DAILY);
    return NextResponse.json(activityData);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch GitHub activity",
        details: (error as Error).message,
      },
      { status: 500 },
    );
  }
}

