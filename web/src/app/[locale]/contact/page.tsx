import { Container, Heading, Reveal, Section } from "@/components/luxe";
import { ContactForm } from "@/components/sections/ContactForm";
import { getSiteSettings } from "@/sanity/lib/content";

export const metadata = {
  title: "Contact — Précieuse",
  description:
    "Pour discuter de votre projet, sur-mesure ou collection, ou simplement dire bonjour.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const email = settings.email;
  const whatsapp = settings.whatsapp ?? "";
  const instagram = settings.instagram ?? "";
  return (
    <Section spacing="default" tone="cream">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <Heading as="h1" size="display" overline="Contact">
                Parlons de votre projet.
              </Heading>
              <p className="text-foreground/70 mt-8 text-lg leading-relaxed font-light">
                Une question sur la collection ? Une création sur-mesure ? Un
                simple bonjour ? Écrivez-moi par formulaire, par mail ou
                directement par WhatsApp — je vous réponds sous 24h.
              </p>

              <ul className="mt-12 space-y-4 text-sm font-light">
                <li>
                  <span className="text-foreground/40 block text-xs tracking-wider uppercase">
                    Email
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-raspberry mt-1 block text-base transition-colors"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <span className="text-foreground/40 block text-xs tracking-wider uppercase">
                    WhatsApp
                  </span>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-raspberry mt-1 block text-base transition-colors"
                  >
                    Discuter directement
                  </a>
                </li>
                <li>
                  <span className="text-foreground/40 block text-xs tracking-wider uppercase">
                    Instagram
                  </span>
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-raspberry mt-1 block text-base transition-colors"
                  >
                    @precieuse.bijoux
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-md border border-black/5 bg-white p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
