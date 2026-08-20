import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { FloatingContact } from "@/components/site/floating-contact";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solanki Singh & CO. | Chartered Accountants",
  description:
    "Solanki Singh & CO. delivers tax planning, audit, bookkeeping, and business advisory services built on clarity, compliance, and measurable results.",
  metadataBase: new URL("https://solankica.com"),
  openGraph: {
    title: "Solanki Singh & CO. | Chartered Accountants",
    description:
      "Tax planning, audit, bookkeeping, and business advisory services for growing businesses.",
    url: "https://solankica.com",
    siteName: "Solanki Singh & CO.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:rounded-sm focus-visible:bg-surface-strong focus-visible:px-4 focus-visible:py-2 focus-visible:text-text-inverse"
        >
          Skip to main content
        </a>
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
