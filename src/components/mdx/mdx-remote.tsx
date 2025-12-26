import { MDXRemote as MDXRemoteComponent } from "next-mdx-remote/rsc";
import { mdxComponents } from "./mdx-components";

interface MDXRemoteProps {
  source: string;
}

export async function MDXRemote({ source }: MDXRemoteProps) {
  return <MDXRemoteComponent source={source} components={mdxComponents} />;
}
