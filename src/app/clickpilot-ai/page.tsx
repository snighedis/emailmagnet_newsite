import { ProductPlaceholder } from "@/components/marketing/product-placeholder";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "ClickPilot AI")!;

export const metadata = createMetadata({
  title: "ClickPilot AI",
  description: "ClickPilot AI is a Dentoku Dev product page placeholder for finalized product details.",
  path: "/clickpilot-ai",
});

export default function ClickPilotAiPage() {
  return <ProductPlaceholder product={product} />;
}
