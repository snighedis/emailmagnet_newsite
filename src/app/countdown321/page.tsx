import { ComingSoonProduct } from "@/components/marketing/coming-soon-product";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "Countdown321")!;

export const metadata = createMetadata({
  title: "Countdown321",
  description:
    "Countdown321 is a coming soon Dentoku Dev product page.",
  path: "/countdown321",
});

export default function Countdown321Page() {
  return <ComingSoonProduct product={product} />;
}
