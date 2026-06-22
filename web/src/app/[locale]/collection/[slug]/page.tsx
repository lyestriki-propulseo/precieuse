import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Heading, LuxeImage, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPiece, getPieces } from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";

const L = "fr" as const;

const ctaPrimary = cn(
  buttonVariants({ size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);
const ctaGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "rounded-full px-6 h-auto py-3",
);

export async function generateStaticParams() {
  const pieces = await getPieces();
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/collection/[slug]">) {
  const { slug } = await params;
  const piece = await getPiece(slug);
  if (!piece) return {};
  return {
    title: `${piece.name} — Précieuse`,
    description: pickLocale(piece.tagline, L),
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/[locale]/collection/[slug]">) {
  const { slug } = await params;
  const piece = await getPiece(slug);
  if (!piece) notFound();

  const product = {
    slug: piece.slug,
    name: piece.name,
    tagline: pickLocale(piece.tagline, L),
    price: pickLocale(piece.priceLabel, L),
    description: pickLocale(piece.description, L),
    materials: pickLocale(piece.materials, L),
    story: pickLocale(piece.story, L),
    image: piece.image.src,
    imageAlt: pickLocale(piece.image.alt, L),
  };

  return (
    <>
      <Section spacing="default" tone="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <LuxeImage
                src={product.image}
                alt={product.imageAlt}
                width={1200}
                height={1600}
                aspect="portrait"
                priority
                wrapperClassName="rounded-md border border-black/5 bg-white"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-center">
                <span className="text-gold-whisper text-xs tracking-[0.3em] uppercase">
                  {product.tagline}
                </span>
                <Heading as="h1" size="lg" className="mt-4">
                  {product.name}
                </Heading>
                <p className="text-foreground/40 mt-3 text-sm tracking-wider uppercase">
                  {product.price}
                </p>
                <p className="text-foreground/75 mt-8 text-base leading-relaxed font-light">
                  {product.description}
                </p>

                <div className="mt-10 space-y-4 border-t border-black/10 pt-8">
                  <div>
                    <p className="text-foreground/40 text-xs tracking-wider uppercase">
                      Matières
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-light">
                      {product.materials}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/fr/contact?modele=${product.slug}`}
                    className={ctaPrimary}
                  >
                    Demander un devis
                  </Link>
                  <Link href="/fr/sur-mesure" className={ctaGhost}>
                    Personnaliser
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container size="narrow">
          <Reveal>
            <Heading as="h2" size="md" overline="L'histoire">
              D&apos;où vient {product.name}
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/75 mt-8 text-lg leading-relaxed font-light">
              {product.story}
            </p>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
