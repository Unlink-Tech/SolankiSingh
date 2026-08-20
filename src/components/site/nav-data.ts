export type NavChild = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

export function isPathActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function collectHrefs(items: NavChild[]): string[] {
  return items.flatMap((item) => [
    item.href,
    ...(item.children ? collectHrefs(item.children) : []),
  ]);
}

type AnyNavNode = NavItem | NavChild;

function findChildrenByHref(
  nodes: AnyNavNode[],
  href: string
): NavChild[] | undefined {
  for (const node of nodes) {
    if (node.href === href) return node.children ?? [];
    if (node.children) {
      const found = findChildrenByHref(node.children, href);
      if (found) return found;
    }
  }
  return undefined;
}

/** Direct sub-services (children) of the nav node at this href, or []. */
export function getChildrenFor(href: string): NavChild[] {
  return findChildrenByHref(NAV_ITEMS, href) ?? [];
}

/** Sibling sub-services under the same parent, excluding the given href. */
export function getSiblingsFor(parentHref: string, selfHref: string): NavChild[] {
  return getChildrenFor(parentHref).filter((child) => child.href !== selfHref);
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about/" },
      { label: "Our Team", href: "/our-team/" },
      { label: "Career", href: "/career/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    label: "Services",
    children: [
      {
        label: "Audit & Assurance",
        href: "/audit-assurancev/",
        children: [
          { label: "Statutory Audit", href: "/auditing-services/statutory-audit/" },
          { label: "Tax Audit", href: "/auditing-services/tax-audit/" },
          {
            label: "Data Analysis Vis a Vis Tax Laws",
            href: "/gst-law-advisory/data-analysis-vis-a-vis-tax-laws/",
          },
          { label: "Financial Audit", href: "/financial-audit/" },
          { label: "Internal Audit", href: "/auditing-services/internal-audit/" },
        ],
      },
      {
        label: "Income Tax Advisory",
        href: "/income-tax-advisory/",
        children: [
          { label: "Tax Compliances", href: "/tax-compliances/" },
          {
            label: "Representation and Litigation",
            href: "/representation-and-litigation/",
          },
          { label: "Transfer Pricing", href: "/direct-taxation/transfer-pricing/" },
          { label: "Internal Tax Advisory", href: "/internal-tax-advisory/" },
          { label: "Domestic Tax Advisory", href: "/domestic-tax-advisory/" },
        ],
      },
      {
        label: "Corporate Law Services",
        href: "/corporate-law-services/",
        children: [
          { label: "Company Formation", href: "/corporate-law-services/company-formation/" },
          {
            label: "Corporate Governance",
            href: "/corporate-law-services/corporate-governance/",
          },
          {
            label: "Corporate Law Advisory",
            href: "/corporate-law-services/corporate-law-advisory/",
          },
          {
            label: "Corporate Law Compliance",
            href: "/corporate-law-services/corporate-law-compliance/",
          },
          {
            label: "Corporate Restructuring",
            href: "/corporate-law-services/corporate-restructuring/",
          },
          { label: "Due Diligence", href: "/corporate-law-services/due-diligence/" },
        ],
      },
      {
        label: "GST Law Advisory",
        href: "/gst-law-advisory/",
        children: [
          {
            label: "Data Analysis Vis a Vis Tax Laws",
            href: "/gst-law-advisory/data-analysis-vis-a-vis-tax-laws/",
          },
          {
            label: "GST Compliance and Advisory",
            href: "/gst-law-advisory/gst-compliance-and-advisory/",
          },
          {
            label: "GST Liability Calculation",
            href: "/gst-law-advisory/gst-liability-calculation/",
          },
          { label: "GST Registration", href: "/gst-law-advisory/gst-registration/" },
          { label: "GST Return Filing", href: "/gst-law-advisory/gst-return-filing/" },
          {
            label: "Monthly MIS of Indirect Tax Compliance",
            href: "/gst-law-advisory/monthly-mis-of-indirect-tax-compliance/",
          },
        ],
      },
      {
        label: "FEMA/RBI related Services",
        href: "/fema-rbi-related-services/",
        children: [
          {
            label: "Allotment of Shares to non residents",
            href: "/fema-rbi-related-services/allotment-of-shares-to-non-residents/",
          },
          {
            label:
              "Compliance of the procedure including charteredAccountants Certification for repatriation of income/assets from India",
            href: "/fema-rbi-related-services/compliance-of-the-procedure-including-charteredaccountants-certification-for-repatriation-ofincome-assets-from-india/",
          },
          {
            label: "Foreign Direct Investment (FDI)",
            href: "/fema-rbi-related-services/foreign-direct-investment-fdi/",
          },
          {
            label: "Issue of Statutory Certificates under FEMA & RBI regulation",
            href: "/fema-rbi-related-services/issue-of-statutory-certificates-under-fema-rbi-regulation/",
          },
          {
            label: "Transfer of shares from Indian resident to non-residents",
            href: "/fema-rbi-related-services/transfer-of-shares-from-indian-resident-to-non-residents/",
          },
          {
            label: "Setting up Joint Venture (JV)",
            href: "/fema-rbi-related-services/setting-up-joint-venture-jv/",
          },
          {
            label:
              "Setting up Partnership / Partnership by NRI'S or persons of Indian origin",
            href: "/fema-rbi-related-services/setting-up-partnership-partnership-by-nris-or-persons-of-indian-origin/",
          },
          {
            label: "Other Advisory Services on FEMA / RBI etc.",
            href: "/fema-rbi-related-services/other-advisory-services-on-fema-rbi-etc/",
          },
        ],
      },
      {
        label: "Loan & Debt Advisory",
        href: "/loan-debt-advisory/",
        children: [
          { label: "Letter of Credit", href: "/loan-debt-advisory/letter-of-credit/" },
          { label: "Mortgage Loan", href: "/loan-debt-advisory/mortgage-loan/" },
          { label: "Personal Loan", href: "/loan-debt-advisory/personal-loan/" },
          { label: "SME Loan", href: "/loan-debt-advisory/sme-loan/" },
          { label: "Term Loan", href: "/loan-debt-advisory/term-loan/" },
          {
            label: "Working Capital Term Loan",
            href: "/loan-debt-advisory/working-capital-term-loan/",
          },
          { label: "Debt Consolidation", href: "/loan-debt-advisory/debt-consolidation/" },
          { label: "Cash Credit Limit", href: "/loan-debt-advisory/cash-credit-limit/" },
          { label: "Bank Guarantee", href: "/loan-debt-advisory/bank-guarantee/" },
          { label: "Home Loan", href: "/loan-debt-advisory/home-loan/" },
        ],
      },
      { label: "Start up Services", href: "/start-up-services/" },
      {
        label: "Business Advisory",
        href: "/business-advisory/",
        children: [
          {
            label: "Business Set up and Registration Advisory",
            href: "/business-advisory/business-set-up-and-registration-advisory/",
            children: [
              {
                label: "Set up of Company in India by Foreign Nationals/ Companies",
                href: "/business-advisory/business-set-up-and-registration-advisory/set-up-of-company-in-india-by-foreign-nationals-companies/",
              },
              {
                label: "Company Registration",
                href: "/business-advisory/business-set-up-and-registration-advisory/company-registration/",
              },
              {
                label: "Society/NGO Registration",
                href: "/business-advisory/business-set-up-and-registration-advisory/society-ngo-registration/",
              },
              {
                label: "Partnership registration",
                href: "/business-advisory/business-set-up-and-registration-advisory/partnership-registration/",
              },
              {
                label: "Start up Registration & Advisory",
                href: "/business-advisory/business-set-up-and-registration-advisory/start-up-registration-advisory/",
              },
            ],
          },
          {
            label: "Joint Venture related Advisory",
            href: "/business-advisory/joint-venture-related-advisory/",
          },
          {
            label: "Searching of Business Partners",
            href: "/business-advisory/searching-of-business-partners/",
          },
        ],
      },
      { label: "Accounting & Business Process", href: "/accounting-business-process/" },
    ],
  },
  { label: "Industries Served", href: "/industries-served/" },
  
];
