import { ComingSoonProduct } from "@/components/marketing/coming-soon-product";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "ClickPilot AI")!;

export const metadata = createMetadata({
  title: "ClickPilot AI",
  description: "ClickPilot AI is a coming soon Dentoku Dev product page.",
  path: "/clickpilot-ai",
});

export default function ClickPilotAiPage() {
  return <ComingSoonProduct product={product} />;
}
