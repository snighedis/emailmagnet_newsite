import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">404</p>
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
