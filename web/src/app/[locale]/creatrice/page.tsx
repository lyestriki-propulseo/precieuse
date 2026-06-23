import Link from "next/link";
import { Container, Heading, LuxeImage, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getCreatrice } from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";

export const metadata = {
  title: "La créatrice",
  description:
    "Emeline, joaillière artisanale à Bordeaux — 12 ans à travailler l'or à la main.",
};

const L = "fr" as const;

export default async function CreatricePage() {
  const creatrice = await getCreatrice();
  const overline = pickLocale(creatrice.overline, L);
  const title = pickLocale(creatrice.title, L);
  const intro = pickLocale(creatrice.intro, L);
  const portraitSrc = creatrice.portrait.src;
  const portraitAlt = pickLocale(creatrice.portrait.alt, L);
  const quote = pickLocale(creatrice.quote, L);
  const parcours = creatrice.sections[0];
  const philosophie = creatrice.sections[1];
  return (
    <>
      <Section spacing="default" tone="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
            <Reveal>
              <LuxeImage
                src={portraitSrc}
                alt={portraitAlt}
                width={1080}
                height={1440}
                aspect="portrait"
                grayscale
                priority
                wrapperClassName="rounded-md border border-black/5 bg-white"
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex h-full flex-col justify-center">
                <Heading as="h1" size="display" overline={overline}>
                  {title}
                </Heading>
                <p className="text-foreground/75 mt-8 text-lg leading-relaxed font-light">
                  {intro}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <LuxeImage
                src="/images/real/bague-pierre-josephine.webp"
                alt="Bague en or 18 carats sertie d'une pierre — savoir-faire de l'atelier Précieuse, Bordeaux"
                width={1200}
                height={1600}
                aspect="portrait"
                grayscale
                wrapperClassName="rounded-md"
              />
            </Reveal>
            <div>
              <Reveal>
                <Heading
                  as="h2"
                  size="md"
                  overline={pickLocale(parcours?.overline, L)}
                >
                  {pickLocale(parcours?.title, L)}
                </Heading>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="text-foreground/75 mt-10 space-y-6 text-lg leading-relaxed font-light">
                  {(parcours?.body ?? []).map((p, i) => (
                    <p key={i}>{pickLocale(p, L)}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="cream">
        <Container size="narrow">
          <Reveal>
            <Heading
              as="h2"
              size="md"
              overline={pickLocale(philosophie?.overline, L)}
            >
              {pickLocale(philosophie?.title, L)}
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-foreground/75 mt-10 space-y-6 text-lg leading-relaxed font-light">
              {(philosophie?.body ?? []).map((p, i) => (
                <p key={i}>{pickLocale(p, L)}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="border-raspberry/30 mt-12 border-l-2 pl-6 italic">
              <p className="font-heading text-2xl leading-snug">
                « {quote} »
              </p>
            </blockquote>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="loose" tone="white">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Heading as="h2" size="lg" className="mx-auto">
              On se rencontre ?
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10">
              <Link
                href="/fr/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 h-auto py-3",
                )}
              >
                Prendre rendez-vous
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
