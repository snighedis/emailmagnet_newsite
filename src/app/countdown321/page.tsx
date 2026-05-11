import { ProductPlaceholder } from "@/components/marketing/product-placeholder";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

const product = productPortfolio.find((item) => item.name === "Countdown321")!;

export const metadata = createMetadata({
  title: "Countdown321",
  description:
    "Countdown321 is a Dentoku Dev product page placeholder for finalized product details.",
  path: "/countdown321",
});

export default function Countdown321Page() {
  return <ProductPlaceholder product={product} />;
}
