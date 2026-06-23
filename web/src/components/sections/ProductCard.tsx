import Link from "next/link";
import { LuxeImage } from "@/components/luxe";

export type ProductCardVM = {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  imageAlt: string;
};

type Props = {
  product: ProductCardVM;
};

export function ProductCard({ product }: Props) {
  return (
    <Link href={`/fr/collection/${product.slug}`} className="group block">
      <LuxeImage
        src={product.image}
        alt={product.imageAlt}
        width={900}
        height={1200}
        aspect="portrait"
        wrapperClassName="rounded-md border border-black/5 bg-white"
        className="transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-heading group-hover:text-raspberry text-2xl transition-colors">
          {product.name}
        </h3>
        <span className="text-foreground/50 text-xs tracking-wider whitespace-nowrap uppercase">
          {product.price}
        </span>
      </div>
      <p className="text-foreground/60 mt-2 text-sm leading-relaxed font-light">
        {product.tagline}
      </p>
    </Link>
  );
}
