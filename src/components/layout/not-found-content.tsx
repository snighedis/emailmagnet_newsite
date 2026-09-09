import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/marketing/eyebrow";

/**
 * Shared by app/global-not-found.tsx (URLs matching no route) and
 * app/[lang]/not-found.tsx (notFound() thrown while rendering a route, e.g.
 * an Italian URL for a page that only exists in English).
 */
export function NotFoundContent() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">Page not found</h1>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        The page you requested does not exist in the EmailMagnet site architecture.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </section>
  );
}
