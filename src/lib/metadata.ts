import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString();
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
