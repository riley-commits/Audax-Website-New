import { redirect } from "next/navigation";

/**
 * /founders — stub for the new canonical audience-door URL.
 *
 * Redirects to the existing program page until Lane A.2 builds a
 * dedicated landing page (per the design doc: hero + founder case
 * studies + fractional executive offering + CTA).
 *
 * Replace this file with the full landing page in the next iteration.
 */
export default function FoundersPage() {
  redirect("/programs/catalyst-for-founders");
}
