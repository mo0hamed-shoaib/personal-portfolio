import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import Image from "next/image";

/**
 * Custom MDX components for styling blog posts
 * These override the default HTML elements rendered by MDX
 */
export const mdxComponents: MDXComponents = {
  // Headings with anchor links
  h1: ({ children, ...props }) => (
    <h1
      className="mt-8 mb-4 text-3xl font-bold tracking-tight md:text-4xl"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="mt-8 mb-4 text-2xl font-semibold tracking-tight border-b border-border pb-2"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mt-6 mb-3 text-xl font-semibold" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mt-4 mb-2 text-lg font-medium" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs and text
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-7 text-foreground/90" {...props}>
      {children}
    </p>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),

  // Links
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),

  // Blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="mb-4 border-l-4 border-border pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),

  // Code blocks
  pre: ({ children, ...props }) => (
    <pre
      className="mb-4 overflow-x-auto border border-border bg-card p-4 text-sm"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => {
    // Check if it's inline code (not inside a pre)
    const isInline = typeof children === "string";
    if (isInline) {
      return (
        <code className="px-1.5 py-0.5 bg-muted text-sm font-mono" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className="font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },

  // Horizontal rule
  hr: (props) => <hr className="my-8 border-border" {...props} />,

  // Tables
  table: ({ children, ...props }) => (
    <div className="mb-4 overflow-x-auto">
      <table className="w-full border-collapse border border-border" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-muted" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }) => (
    <th
      className="border border-border px-4 py-2 text-left font-semibold"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border border-border px-4 py-2" {...props}>
      {children}
    </td>
  ),

  // Images - using Next.js Image for optimization
  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    // For external images, use regular img tag
    if (src.startsWith("http")) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || ""}
          className="mb-4 w-full border border-border"
          {...props}
        />
      );
    }
    // For local images, use Next.js Image
    return (
      <Image
        src={src}
        alt={alt || ""}
        width={800}
        height={450}
        className="mb-4 w-full border border-border"
        {...props}
      />
    );
  },
};
