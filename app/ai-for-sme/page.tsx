import { redirect } from "next/navigation";

/**
 * /ai-for-sme — stub for the new canonical audience-door URL.
 *
 * Redirects to the existing program page until Lane A.2 builds a
 * dedicated landing page (per the design doc: hero + AI Readiness Audit
 * section + industry use cases + Canadian-presence proof + CTA).
 *
 * Replace this file with the full landing page in the next iteration.
 */
export default function AiForSmePage() {
  redirect("/programs/sme-ai-implementation");
}
