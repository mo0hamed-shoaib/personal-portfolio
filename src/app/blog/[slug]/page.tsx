import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "@/components/mdx/mdx-remote";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background pb-16">
      <div className="container mx-auto px-4 pt-24">
        <article className="mx-auto max-w-3xl">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to blog
            </Link>
          </div>

          {/* Post header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
              {post.title}
            </h1>

            {post.description && (
              <p className="text-lg text-muted-foreground">
                {post.description}
              </p>
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 text-xs font-medium border border-border bg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <hr className="my-8 border-border" />

          {/* Post content */}
          <div className="prose-custom">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>
    </main>
  );
}
