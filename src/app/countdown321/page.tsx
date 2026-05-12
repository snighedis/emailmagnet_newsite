import { PortfolioProductPage } from "@/components/marketing/portfolio-product-page";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "Countdown321")!;

export const metadata = createMetadata({
  title: "Countdown321",
  description: "Countdown321 is a Dentoku Dev Shopify app for countdown and time-based storefront messaging.",
  path: "/countdown321",
});

export default function Countdown321Page() {
  return <PortfolioProductPage product={product} />;
}
