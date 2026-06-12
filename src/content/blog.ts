import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  tags: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  readingTime: string;
  body: string;
};

const blogDirectory = path.join(process.cwd(), "src/content/blog");

function getPostSlugs() {
  return fs
    .readdirSync(blogDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

function readBlogPost(slug: string): BlogPost {
  const fullPath = path.join(blogDirectory, `${slug}.mdx`);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  return {
    slug,
    title: String(data.title),
    description: String(data.description),
    date: String(data.date),
    updated: String(data.updated ?? data.date),
    author: String(data.author ?? "Nicola Orlandi"),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featuredImage: data.featuredImage ? String(data.featuredImage) : undefined,
    featuredImageAlt: data.featuredImageAlt ? String(data.featuredImageAlt) : undefined,
    readingTime: readingTime(content).text,
    body: content,
  };
}

export const blogPosts: BlogPost[] = getPostSlugs()
  .map(readBlogPost)
  .sort((a, b) => (a.date > b.date ? -1 : 1));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
