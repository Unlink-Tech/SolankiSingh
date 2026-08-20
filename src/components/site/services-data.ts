import {
  Briefcase,
  Calculator,
  FileSpreadsheet,
  FileText,
  HandCoins,
  Landmark,
  Rocket,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  href: string;
  description: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    icon: ShieldCheck,
    title: "Audit & Assurance",
    href: "/audit-assurancev/",
    description:
      "We deliver trusted audit and assurance services, safeguarding your financial integrity and driving confidence.",
    image: "/services/service-1.webp",
  },
  {
    icon: Calculator,
    title: "Income Tax Advisory",
    href: "/income-tax-advisory/",
    description:
      "Unlock your financial potential with our expert Income Tax Advisory services, optimizing savings and ensuring seamless tax compliance.",
    image: "/services/service-2.webp",
  },
  {
    icon: FileText,
    title: "GST Law Advisory",
    href: "/gst-law-advisory/",
    description:
      "Navigate GST with confidence! Our expert advisory services simplify compliance, optimize savings, and keep your business ahead.",
    image: "/services/service-3.webp",
  },
  {
    icon: Scale,
    title: "Corporate Law Services",
    href: "/corporate-law-services/",
    description:
      "Empower your business with our Corporate Law services, offering expert guidance on compliance, governance, and strategic growth.",
    image: "/services/service-4.webp",
  },
  {
    icon: Landmark,
    title: "FEMA/RBI related Services",
    href: "/fema-rbi-related-services/",
    description:
      "Simplify cross-border transactions with our expert FEMA/RBI services, ensuring seamless compliance and risk management for your business.",
    image: "/services/service-5.webp",
  },
  {
    icon: HandCoins,
    title: "Loan & Debt Advisory",
    href: "/loan-debt-advisory/",
    description:
      "Drive your financial growth with our Loan & Debt Advisory services, offering tailored solutions for optimal funding and debt management.",
    image: "/services/service-6.webp",
  },
  {
    icon: Rocket,
    title: "Start up Services",
    href: "/start-up-services/",
    description:
      "Fuel your startup's success with our expert services, from registration to funding, ensuring smooth growth and scalability.",
    image: "/services/service-7.webp",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    href: "/business-advisory/",
    description:
      "Empower your business with our expert advisory services, guiding you through every step from strategy to execution, ensuring sustainable growth and long-term success.",
    image: "/services/service-8.webp",
  },
  {
    icon: FileSpreadsheet,
    title: "Accounting & Business Process",
    href: "/accounting-business-process/",
    description:
      "Streamline your operations and drive growth with our expert accounting and business process advisory services, ensuring efficiency, compliance, and scalability at every stage of your journey.",
    image: "/services/service-9.webp",
  },
];
