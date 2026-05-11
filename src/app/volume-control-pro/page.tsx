import { ComingSoonProduct } from "@/components/marketing/coming-soon-product";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "Volume Control PRO")!;

export const metadata = createMetadata({
  title: "Volume Control PRO",
  description:
    "Volume Control PRO is a coming soon Dentoku Dev product page.",
  path: "/volume-control-pro",
});

export default function VolumeControlProPage() {
  return <ComingSoonProduct product={product} />;
}
