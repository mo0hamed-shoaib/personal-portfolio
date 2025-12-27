import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = {
  title: "Blog",
  description: "Thoughts on web development, design, and technology.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl border-x border-border px-4 pt-16 pb-16">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList className="justify-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Blog</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Blog
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Thoughts on web development, design, and technology.
              </p>
            </div>

            {/* Posts list */}
            {posts.length === 0 ? (
              <div className="border border-border bg-card p-8 text-center">
                <p className="text-muted-foreground">
                  No posts yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.slug} className="group relative">
                    <div className="relative border border-border bg-card p-6 transition-colors hover:bg-accent/50">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
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

                        <h2 className="text-xl font-semibold tracking-tight">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="after:absolute after:inset-0 hover:underline"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        <p className="text-muted-foreground line-clamp-2">
                          {post.description}
                        </p>

                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
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
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
