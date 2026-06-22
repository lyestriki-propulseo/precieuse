import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { ProductCard } from "@/components/sections/ProductCard";
import { PRODUCTS } from "@/lib/content/products";

export const metadata = {
  title: "Collection — Précieuse",
  description: "Cinq modèles intemporels en or 18kt et diamants GVS.",
};

export default function CollectionPage() {
  return (
    <>
      <Section spacing="default" tone="cream">
        <Container size="narrow">
          <Reveal>
            <Heading as="h1" size="display" overline="La collection">
              Cinq pièces, cinq histoires.
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/70 mt-8 text-lg leading-relaxed font-light">
              Chaque modèle est dessiné et fabriqué à la main, en or 18kt, avec
              des diamants GVS certifiés. À porter tels quels ou à
              personnaliser — pierre, métal, taille.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container>
          <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} as="li" delay={i * 0.08}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
