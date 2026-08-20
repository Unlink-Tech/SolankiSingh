import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/reveal";
import { CtaButton } from "@/components/site/cta-button";
import { CONTACT_DETAILS } from "@/components/site/contact-data";

const FAQS = [
  {
    question: "How quickly can you take over our books?",
    answer:
      "Most engagements start within a week of signing. We handle the handoff from your previous accountant, including document transfer, so there's no gap in your compliance timeline.",
  },
  {
    question: "Do you work with businesses outside your local area?",
    answer:
      "Yes. Documents move through our encrypted client portal and meetings run by video, so location isn't a constraint. Roughly half of our clients work with us fully remotely.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Fixed monthly retainers based on transaction volume and service scope, agreed before any work begins. No hourly surprises, no change-order billing for standard requests.",
  },
  {
    question: "Can you help with an active audit or overdue filings?",
    answer:
      "Yes, this is one of our most common engagements. We prioritize urgent compliance issues first, then move you onto a standard cadence once the backlog is cleared.",
  },
  {
    question: "How is our financial data kept secure?",
    answer:
      "All documents are encrypted in transit and at rest, access is role-restricted within our team, and we never share client data with third parties without written consent.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-surface-muted/40 py-24 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <Reveal>
          <span className="text-xs font-semibold tracking-wide text-surface-strong uppercase">
            Get in touch
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl">
            Talk to a real accountant, not a ticket queue
          </h2>
          <p className="mt-4 text-md text-text-primary">
            One firm, one point of contact. Reach out directly, or head to
            our contact page to send a message and see us on the map.
          </p>

          <dl className="mt-10 flex flex-col gap-5">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-surface-strong/10 text-surface-strong">
                  <detail.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium tracking-wide text-text-primary uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-sm text-text-tertiary">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="transition-colors hover:text-surface-strong"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>

          <CtaButton href="/contact/" className="mt-10">
            Contact Us
          </CtaButton>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold tracking-wide text-surface-strong uppercase">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-text-tertiary md:text-4xl"
          >
            Questions we hear most
          </h2>

          <Accordion className="mt-8 rounded-xl border border-border bg-background px-6 shadow-1">
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="py-5 text-base text-text-tertiary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md text-text-primary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
