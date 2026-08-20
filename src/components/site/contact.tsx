"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/reveal";
import {
  CONTACT_DETAILS,
  OFFICE_ADDRESS,
  SERVICE_OPTIONS,
} from "@/components/site/contact-data";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, boolean> = {
      name: !String(data.get("name") ?? "").trim(),
      email: !String(data.get("email") ?? "").trim(),
      message: !String(data.get("message") ?? "").trim(),
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    form.reset();
  }

  return (
    <section
      aria-label="Contact details and message form"
      className="bg-background pt-24 pb-24 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <h2 className="text-xl font-semibold text-text-tertiary">
            Get in touch
          </h2>

          <dl className="mt-6 flex flex-col gap-5">
            {CONTACT_DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-surface-strong/10 text-surface-strong">
                  <detail.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-xs font-medium text-text-primary uppercase tracking-wide">
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

          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-1">
            <iframe
              title="Office location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`}
              className="h-72 w-full grayscale-[15%] md:h-80"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-border bg-background p-7 shadow-2 md:p-9">
            {status === "success" ? (
              <div
                role="status"
                className="flex flex-col items-center gap-3 py-10 text-center"
              >
                <CheckCircle2 className="size-10 text-surface-strong" />
                <p className="text-lg font-semibold text-text-tertiary">
                  Message sent
                </p>
                <p className="max-w-sm text-sm text-text-primary">
                  Thanks for reaching out. A member of our team will get back
                  to you within one business day.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 rounded-[var(--radius-md)]"
                  onClick={() => setStatus("idle")}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <h2 className="text-xl font-semibold text-text-tertiary">
                  Send us a message
                </h2>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="name">
                      Full name<span aria-hidden="true"> *</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      aria-required="true"
                      aria-invalid={errors.name || undefined}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="h-11 rounded-sm"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-destructive">
                        Please enter your name.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email">
                      Email<span aria-hidden="true"> *</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      aria-required="true"
                      aria-invalid={errors.email || undefined}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                      className="h-11 rounded-sm"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-destructive">
                        Please enter a valid email.
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="h-11 rounded-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="service">Service needed</Label>
                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="h-11 w-full rounded-sm border border-input bg-transparent px-2.5 text-sm text-text-tertiary outline-none transition-colors focus-visible:border-ring"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="message">
                    Message<span aria-hidden="true"> *</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-required="true"
                    aria-invalid={errors.message || undefined}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    className="rounded-sm"
                    placeholder="Tell us a bit about your business and what you need help with."
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive">
                      Please add a short message.
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-11 w-full rounded-[var(--radius-md)] bg-surface-strong text-text-inverse shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-strong-hover disabled:translate-y-0 sm:w-auto sm:self-start sm:px-8"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>

                <p className="text-xs text-text-primary">
                  By submitting, you agree to be contacted about your
                  inquiry. We never share your information with third
                  parties.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
