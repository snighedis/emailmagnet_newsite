import { ProductPlaceholder } from "@/components/marketing/product-placeholder";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "Volume Control PRO")!;

export const metadata = createMetadata({
  title: "Volume Control PRO",
  description:
    "Volume Control PRO is a Dentoku Dev product page placeholder for finalized product details.",
  path: "/volume-control-pro",
});

export default function VolumeControlProPage() {
  return <ProductPlaceholder product={product} />;
}
