import { Mail, MapPin, Phone } from "lucide-react";

export const OFFICE_ADDRESS =
  "B-038, Third Floor, Tower-B, ATS Bouquet, Sector-132, Noida Expressway, Noida-201304, Delhi NCR";

export const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Landline",
    value: "0120-4484999",
    href: "tel:+911204484999",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 98107 79908",
    href: "tel:+919810779908",
  },
  {
    icon: Mail,
    label: "Email",
    value: "solankisinghco@gmail.com",
    href: "mailto:solankisinghco@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: OFFICE_ADDRESS,
  },
];

export const SERVICE_OPTIONS = [
  "Tax Planning & Filing",
  "Bookkeeping & Accounting",
  "Audit & Assurance",
  "GST & Compliance",
  "Payroll Management",
  "Business Advisory",
  "Something else",
];
