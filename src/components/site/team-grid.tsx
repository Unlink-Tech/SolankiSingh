import Image from "next/image";
import { BadgeCheck, Quote } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { TEAM } from "@/components/site/team-data";

export function TeamGrid() {
  const [founder] = TEAM;

  return (
    <section className="bg-surface-muted/40 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="relative grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-background shadow-2 md:grid-cols-[340px_1fr]">
            <div className="relative flex flex-col items-start justify-center gap-5 overflow-hidden bg-surface-base p-8 sm:p-10 md:p-12">
              <Image
                src="/team/vikas-solanki.jpeg"
                alt=""
                fill
                aria-hidden="true"
                sizes="340px"
                className="object-cover object-top opacity-15"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-surface-base/70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(196,154,77,0.3),transparent_60%)]"
              />
              <div className="relative shrink-0">
                <div className="relative size-32 overflow-hidden rounded-full border-2 border-surface-strong shadow-2 ring-4 ring-white/10">
                  <Image
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <span className="absolute -right-1 -bottom-1 flex size-8 items-center justify-center rounded-full border-2 border-surface-base bg-surface-strong text-text-inverse shadow-1">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                </span>
              </div>
              <div className="relative">
                <h2 className="text-2xl leading-snug font-semibold text-text-inverse">
                  {founder.name}
                </h2>
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-surface-strong/30 bg-surface-strong/10 px-3 py-1 text-xs font-semibold text-surface-strong">
                  {founder.title}
                </span>
              </div>
            </div>
            <div className="relative p-8 sm:p-10 md:p-12">
              <Quote
                aria-hidden="true"
                className="absolute top-6 right-6 size-16 text-surface-strong/10 md:size-20"
                strokeWidth={1}
              />
              <p className="relative text-xs font-semibold tracking-wider text-text-primary/70 uppercase">
                Profile
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-text-primary">
                {founder.bio}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
