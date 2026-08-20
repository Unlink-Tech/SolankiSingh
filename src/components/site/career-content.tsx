"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/site/reveal";

const EMAIL = "solankisinghco@gmail.com";

type Status = "idle" | "submitting" | "success" | "error";

export function CareerContent() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, boolean> = {
      firstName: !String(data.get("firstName") ?? "").trim(),
      lastName: !String(data.get("lastName") ?? "").trim(),
      email: !String(data.get("email") ?? "").trim(),
      subject: !String(data.get("subject") ?? "").trim(),
      mobile: !String(data.get("mobile") ?? "").trim(),
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
      aria-labelledby="career-heading"
      className="bg-background pb-24 pt-24 md:pb-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-surface-muted/40 p-8 text-center shadow-1 md:p-10">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-surface-strong/10 text-surface-strong">
              <Mail className="size-5" aria-hidden="true" />
            </span>
            <h2
              id="career-heading"
              className="mt-5 text-2xl font-semibold tracking-tight text-text-tertiary md:text-3xl"
            >
              Submit Resume
            </h2>
            <p className="mt-3 text-md text-text-primary">
              For career opportunities, mail your resume to:
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="group mt-6 inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-surface-strong px-6 py-3 text-sm font-semibold text-text-inverse shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-strong-hover"
            >
              <Send
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
              {EMAIL}
            </a>
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
                  Application sent
                </p>
                <p className="max-w-sm text-sm text-text-primary">
                  Thanks for your interest. A member of our team will review
                  your application and get back to you.
                </p>
                <Button
                  variant="outline"
                  className="mt-2 rounded-[var(--radius-md)]"
                  onClick={() => setStatus("idle")}
                >
                  Submit another application
                </Button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
              >
                <div className="border-b border-border pb-5">
                  <h3 className="text-xl font-semibold text-text-tertiary">
                    Your Details
                  </h3>
                  <p className="mt-1 text-sm text-text-primary">
                    Let us know how to get back to you.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="firstName">
                      First Name<span aria-hidden="true"> *</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      required
                      aria-required="true"
                      aria-invalid={errors.firstName || undefined}
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                      placeholder="Enter your first name here"
                      className="h-11 rounded-sm"
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-xs text-destructive">
                        This field is required.
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="lastName">
                      Last Name<span aria-hidden="true"> *</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      autoComplete="family-name"
                      required
                      aria-required="true"
                      aria-invalid={errors.lastName || undefined}
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                      placeholder="Enter your last name here"
                      className="h-11 rounded-sm"
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-xs text-destructive">
                        This field is required.
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="email">
                      Email Address<span aria-hidden="true"> *</span>
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
                        errors.email ? "email-error" : "email-hint"
                      }
                      className="h-11 rounded-sm"
                    />
                    {errors.email ? (
                      <p id="email-error" className="text-xs text-destructive">
                        This field is required.
                      </p>
                    ) : (
                      <p id="email-hint" className="text-xs text-text-primary/70">
                        Example: user@website.com
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="subject">
                      Subject / Job Applied For<span aria-hidden="true"> *</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      aria-required="true"
                      aria-invalid={errors.subject || undefined}
                      aria-describedby={
                        errors.subject ? "subject-error" : undefined
                      }
                      className="h-11 rounded-sm"
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-xs text-destructive">
                        This field is required.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="mobile">
                    Mobile<span aria-hidden="true"> *</span>
                  </Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    autoComplete="tel"
                    required
                    aria-required="true"
                    aria-invalid={errors.mobile || undefined}
                    aria-describedby={errors.mobile ? "mobile-error" : undefined}
                    className="h-11 rounded-sm"
                  />
                  {errors.mobile && (
                    <p id="mobile-error" className="text-xs text-destructive">
                      This field is required.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 border-t border-border pt-6">
                  <Label htmlFor="introduction">
                    Give brief introduction about yourself
                  </Label>
                  <Textarea
                    id="introduction"
                    name="introduction"
                    rows={5}
                    className="rounded-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="resume">File Upload</Label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="h-11 cursor-pointer rounded-sm file:mr-3 file:h-full file:cursor-pointer file:rounded-sm file:border-0 file:bg-surface-strong file:px-4 file:text-sm file:font-semibold file:text-text-inverse hover:file:bg-surface-strong-hover"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="h-11 w-full rounded-[var(--radius-md)] bg-surface-strong text-text-inverse shadow-2 transition-token transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-strong-hover disabled:translate-y-0 sm:w-auto sm:self-start sm:px-8"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
