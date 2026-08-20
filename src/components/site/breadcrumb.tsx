"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

const LABELS: Record<string, string> = {
  about: "About Us",
  "our-team": "Our Team",
  services: "Services",
  "industries-served": "Industries Served",
  career: "Career",
  contact: "Contact",
  "audit-assurancev": "Audit & Assurance",
  "income-tax-advisory": "Income Tax Advisory",
  "gst-law-advisory": "GST Law Advisory",
  "corporate-law-services": "Corporate Law Services",
  "fema-rbi-related-services": "FEMA/RBI related Services",
  "loan-debt-advisory": "Loan & Debt Advisory",
  "start-up-services": "Start up Services",
  "business-advisory": "Business Advisory",
  "accounting-business-process": "Accounting & Business Process",
  // GST Law Advisory sub-services
  "data-analysis-vis-a-vis-tax-laws": "Data Analysis Vis a Vis Tax Laws",
  "gst-compliance-and-advisory": "GST Compliance and Advisory",
  "gst-liability-calculation": "GST Liability Calculation",
  "gst-registration": "GST Registration",
  "gst-return-filing": "GST Return Filing",
  "monthly-mis-of-indirect-tax-compliance": "Monthly MIS of Indirect Tax Compliance",
  // FEMA/RBI related Services sub-services
  "allotment-of-shares-to-non-residents": "Allotment of Shares to non residents",
  "compliance-of-the-procedure-including-charteredaccountants-certification-for-repatriation-ofincome-assets-from-india":
    "Compliance of the procedure including charteredAccountants Certification for repatriation of income/assets from India",
  "foreign-direct-investment-fdi": "Foreign Direct Investment (FDI)",
  "issue-of-statutory-certificates-under-fema-rbi-regulation":
    "Issue of Statutory Certificates under FEMA & RBI regulation",
  "transfer-of-shares-from-indian-resident-to-non-residents":
    "Transfer of shares from Indian resident to non-residents",
  "setting-up-joint-venture-jv": "Setting up Joint Venture (JV)",
  "setting-up-partnership-partnership-by-nris-or-persons-of-indian-origin":
    "Setting up Partnership / Partnership by NRI'S or persons of Indian origin",
  "other-advisory-services-on-fema-rbi-etc": "Other Advisory Services on FEMA / RBI etc.",
  // Business Advisory sub-services
  "business-set-up-and-registration-advisory": "Business Set up and Registration Advisory",
  "joint-venture-related-advisory": "Joint Venture related Advisory",
  "searching-of-business-partners": "Searching of Business Partners",
  "set-up-of-company-in-india-by-foreign-nationals-companies":
    "Set up of Company in India by Foreign Nationals/ Companies",
  "company-registration": "Company Registration",
  "society-ngo-registration": "Society/NGO Registration",
  "partnership-registration": "Partnership registration",
  "start-up-registration-advisory": "Start up Registration & Advisory",
  // Audit & Assurance sub-services
  "auditing-services": "Auditing Services",
  "statutory-audit": "Statutory Audit",
  "tax-audit": "Tax Audit",
  "financial-audit": "Financial Audit",
  "internal-audit": "Internal Audit",
  // Income Tax Advisory sub-services
  "tax-compliances": "Tax Compliances",
  "representation-and-litigation": "Representation and Litigation",
  "direct-taxation": "Direct Taxation",
  "transfer-pricing": "Transfer Pricing",
  "internal-tax-advisory": "Internal Tax Advisory",
  "domestic-tax-advisory": "Domestic Tax Advisory",
  // Corporate Law Services sub-services
  "company-formation": "Company Formation",
  "corporate-governance": "Corporate Governance",
  "corporate-law-advisory": "Corporate Law Advisory",
  "corporate-law-compliance": "Corporate Law Compliance",
  "corporate-restructuring": "Corporate Restructuring",
  "due-diligence": "Due Diligence",
  // Loan & Debt Advisory sub-services
  "letter-of-credit": "Letter of Credit",
  "mortgage-loan": "Mortgage Loan",
  "personal-loan": "Personal Loan",
  "sme-loan": "SME Loan",
  "term-loan": "Term Loan",
  "working-capital-term-loan": "Working Capital Term Loan",
  "debt-consolidation": "Debt Consolidation",
  "cash-credit-limit": "Cash Credit Limit",
  "bank-guarantee": "Bank Guarantee",
  "home-loan": "Home Loan",
  // Legal pages
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  faq: "FAQ",
  disclaimer: "Disclaimer",
};

function humanize(segment: string) {
  return (
    LABELS[segment] ??
    segment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())
  );
}

// For routes that aren't physically nested but conceptually belong under
// another section (e.g. /our-team/ living under "About"), inject a virtual
// ancestor crumb ahead of it.
const PARENT_OVERRIDES: Record<string, { href: string; label: string }> = {
  "our-team": { href: "/about/", label: "About" },
  "audit-assurancev": { href: "/#services", label: "Services" },
  "income-tax-advisory": { href: "/#services", label: "Services" },
  "gst-law-advisory": { href: "/#services", label: "Services" },
  "corporate-law-services": { href: "/#services", label: "Services" },
  "fema-rbi-related-services": { href: "/#services", label: "Services" },
  "loan-debt-advisory": { href: "/#services", label: "Services" },
  "start-up-services": { href: "/#services", label: "Services" },
  "business-advisory": { href: "/#services", label: "Services" },
  "accounting-business-process": { href: "/#services", label: "Services" },
};

export function Breadcrumb({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: { href: string; label: string }[] = [{ href: "/", label: "Home" }];
  segments.forEach((segment, i) => {
    const override = PARENT_OVERRIDES[segment];
    if (override && !crumbs.some((crumb) => crumb.href === override.href)) {
      crumbs.push(override);
    }
    crumbs.push({
      href: `/${segments.slice(0, i + 1).join("/")}/`,
      label: humanize(segment),
    });
  });

  const currentLabel = crumbs[crumbs.length - 1]?.label ?? "";

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const blobTransition = {
    duration: shouldReduceMotion ? 0 : 14,
    repeat: shouldReduceMotion ? 0 : Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
  };

  return (
    <div
      className={`relative isolate flex w-full items-center justify-between gap-4 overflow-hidden rounded-2xl border border-border bg-background px-5 py-4 shadow-1 sm:px-6 sm:py-5 ${className}`}
    >
      {/* animated ambient gradient */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-[8%] size-40 -translate-y-1/2 rounded-full bg-surface-strong/20 blur-3xl sm:size-56"
          animate={{
            x: [0, 40, -10, 0],
            y: [0, -20, 15, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={blobTransition}
        />
        <motion.div
          className="absolute top-1/2 right-[12%] size-32 -translate-y-1/2 rounded-full bg-surface-strong/15 blur-3xl sm:size-48"
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 18, -12, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ ...blobTransition, duration: shouldReduceMotion ? 0 : 17 }}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <motion.nav
        aria-label="Breadcrumb"
        initial="hidden"
        animate="visible"
        variants={container}
        className="min-w-0"
      >
        <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <motion.li key={crumb.href} variants={item} className="flex items-center gap-2.5">
                {i > 0 && (
                  <ChevronRight
                    className="size-3.5 shrink-0 text-text-primary/35"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className="inline-flex items-center gap-1.5 rounded-full border border-surface-strong/25 bg-surface-strong/10 px-3 py-1 font-semibold text-surface-strong"
                  >
                    {crumb.label}
                  </span>
                ) : i === 0 ? (
                  <Link
                    href={crumb.href}
                    aria-label="Home"
                    className="group flex size-7 items-center justify-center rounded-full border border-border bg-surface-muted/50 text-text-primary transition-colors duration-200 hover:border-surface-strong/30 hover:text-surface-strong"
                  >
                    <Home className="size-3.5" aria-hidden="true" />
                  </Link>
                ) : (
                  <Link
                    href={crumb.href}
                    className="group relative font-medium text-text-primary transition-colors duration-200 hover:text-surface-strong"
                  >
                    {crumb.label}
                    <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-surface-strong transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ol>
      </motion.nav>

      <span
        aria-hidden="true"
        className="hidden shrink-0 items-center gap-2 text-xs font-medium tracking-wide text-text-primary/50 uppercase sm:flex"
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-surface-strong opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-surface-strong" />
        </span>
        Viewing &middot; {currentLabel}
      </span>
    </div>
  );
}
