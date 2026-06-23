import Link from "next/link";
import { Container, Heading, LuxeImage, Reveal, Section } from "@/components/luxe";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getProcess, getSiteSettings } from "@/sanity/lib/content";
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

export const metadata = {
  title: "Sur-mesure",
  description:
    "Créer un bijou unique pensé ensemble, de la première esquisse au bijou final.",
};

export default async function BespokePage() {
  const [process, settings] = await Promise.all([
    getProcess(),
    getSiteSettings(),
  ]);
  const BESPOKE_PROCESS = process.map((s) => ({
    number: s.number,
    title: pickLocale(s.title, L),
    description: pickLocale(s.description, L),
  }));
  const whatsapp = settings.whatsapp ?? "";
  return (
    <>
      <Section spacing="default" tone="cream">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Heading
                  as="h1"
                  size="display"
                  overline="Création sur-mesure"
                >
                  Un projet intime.
                </Heading>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-foreground/70 mt-8 text-lg leading-relaxed font-light">
                  Pour marquer une histoire, un moment. Une création pensée
                  ensemble, de la première esquisse au bijou final.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <LuxeImage
                src="/images/real/bague-entouree-josephine.webp"
                alt="Bague en or 18 carats, pierre entourée de diamants — création sur-mesure de l'atelier Précieuse, Bordeaux"
                width={1080}
                height={1440}
                aspect="portrait"
                priority
                wrapperClassName="rounded-md"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="white">
        <Container>
          <Reveal>
            <Heading as="h2" size="md" overline="Le process">
              Cinq étapes, sans pression.
            </Heading>
          </Reveal>
          <ol className="mt-14 space-y-10">
            {BESPOKE_PROCESS.map((step, i) => (
              <Reveal key={step.number} as="li" delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10 lg:grid-cols-[80px_1fr]">
                  <span className="font-heading text-gold-whisper text-3xl sm:text-4xl">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-2xl">{step.title}</h3>
                    <p className="text-foreground/70 mt-3 max-w-xl text-base leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section spacing="default" tone="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
            <Reveal>
              <LuxeImage
                src="/images/real/bague-pierre-aurore.webp"
                alt="Bague Aurore en or 18 carats sur pierre — création sur-mesure de l'atelier Précieuse, Bordeaux"
                width={1080}
                height={1920}
                aspect="portrait"
                wrapperClassName="rounded-md"
              />
            </Reveal>
            <div>
              <Reveal>
                <Heading as="h2" size="md" overline="Cas réel">
                  La bague de Sandrine
                </Heading>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="text-foreground/75 mt-10 space-y-6 text-lg leading-relaxed font-light">
                  <p>
                    « Ce modèle ou rien ! » — voilà ce qu&apos;elle m&apos;a
                    dit en rentrant dans l&apos;atelier. Sandrine savait ce
                    qu&apos;elle voulait, depuis longtemps. Une monture épurée,
                    une pierre centrale généreuse, des diamants pavés pour
                    scintiller.
                  </p>
                  <p>
                    J&apos;ai recyclé son or et ses diamants hérités pour lui
                    fabriquer la bague de ses rêves. Le résultat : une
                    serpentine or blanc avec pavage diamants, intemporelle et
                    personnelle.
                  </p>
                  <blockquote className="border-raspberry/30 border-l-2 pl-6 text-base italic">
                    « Très contente de votre création. Très professionnelle,
                    agréable, sympathique. »
                  </blockquote>
                  <p>
                    C&apos;est cela, pour moi, le sur-mesure : transformer une
                    intention vague en bijou qui vous ressemble, qui porte
                    votre histoire.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="loose" tone="white">
        <Container size="narrow" className="text-center">
          <Reveal>
            <Heading as="h2" size="lg" className="mx-auto">
              Vous rêvez d&apos;un bijou sur-mesure ?
            </Heading>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-foreground/70 mx-auto mt-8 max-w-md text-lg leading-relaxed font-light">
              Je vous offre un moment privilégié pour en parler.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/fr/contact?type=sur-mesure" className={ctaPrimary}>
                Prendre rendez-vous
              </Link>
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaGhost}
              >
                Discuter sur WhatsApp
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
