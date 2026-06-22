import Link from "next/link";
import { Container, Heading, LuxeImage, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "La créatrice — Précieuse",
  description:
    "Eméline, joaillière artisanale à Bordeaux — 12 ans à travailler l'or à la main.",
};

export default function CreatricePage() {
  return (
    <>
      <Section spacing="default" tone="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-20">
            <Reveal>
              <LuxeImage
                src="/images/emeline/emeline-atelier.jpg"
                alt="Eméline, joaillière artisanale, dans son atelier"
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
                <Heading as="h1" size="display" overline="La créatrice">
                  Moi c&apos;est Eméline.
                </Heading>
                <p className="text-foreground/75 mt-8 text-lg leading-relaxed font-light">
                  Joaillière artisanale, je fabrique le bijou de vos rêves.
                  Douze ans à travailler l&apos;or — tous les jours. Ça laisse
                  des traces, et surtout du savoir-faire.
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
                src="/images/atelier/bague-en-fabrication.jpg"
                alt="Bague en cours de fabrication sur l'établi"
                width={1200}
                height={1600}
                aspect="portrait"
                grayscale
                wrapperClassName="rounded-md"
              />
            </Reveal>
            <div>
              <Reveal>
                <Heading as="h2" size="md" overline="Le parcours">
                  De la formation à l&apos;atelier
                </Heading>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="text-foreground/75 mt-10 space-y-6 text-lg leading-relaxed font-light">
                  <p>
                    Formation en joaillerie, puis douze années à pratiquer
                    chaque technique au quotidien — fonte à cire perdue,
                    sertissage, polissage main. Chaque bague que je crée passe
                    par mes mains, du dessin initial au polissage final.
                  </p>
                  <p>
                    C&apos;est exigeant, c&apos;est précis, c&apos;est lent. Et
                    c&apos;est ce qui rend chaque pièce unique et pérenne.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="cream">
        <Container size="narrow">
          <Reveal>
            <Heading as="h2" size="md" overline="La philosophie">
              Pas de compromis, pas de raccourci.
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/75 mt-10 text-lg leading-relaxed font-light">
              Il y a des jours de doutes. Mais c&apos;est dans ces moments-là
              que je me recentre sur l&apos;essentiel : créer des bijoux qui
              racontent votre histoire, qui deviennent une part de vous. Pas
              de compromis sur la matière, pas de raccourci sur le savoir-faire.
              Précieuse, c&apos;est cela : la transparence de l&apos;artisanat,
              la confiance du geste.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <blockquote className="border-raspberry/30 mt-12 border-l-2 pl-6 italic">
              <p className="font-heading text-2xl leading-snug">
                « Ce que personne ne voit derrière un bijou artisanal — et que
                personne n&apos;a pris le temps de vous expliquer. »
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
