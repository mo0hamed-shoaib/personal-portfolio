import { notFound } from "next/navigation";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "@/components/mdx/mdx-remote";
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
    <>
      <Navbar />
      <main className="bg-background">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl border-x border-border px-4 pt-16 pb-16">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList className="justify-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="max-w-50 truncate">
                      {post.title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Post header */}
            <header className="mb-8 text-center flex flex-col items-center">
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
                <div className="flex flex-wrap justify-center gap-2 mt-4">
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
      <Footer />
    </>
  );
}
