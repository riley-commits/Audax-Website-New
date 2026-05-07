import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free Strategy Call | Audax Ventures",
  description:
    "Book a free 30-minute strategy call with Audax Ventures. Or fill out our contact form and we'll get back to you within one business day.",
  alternates: { canonical: "https://audaxventures.ca/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
