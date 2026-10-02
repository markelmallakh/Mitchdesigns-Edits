import { getTestimonials } from "@/lib/cms";
import { fixtureTestimonials } from "@/lib/cms/fixtures";
import { TestimonialMarquee } from "./TestimonialMarquee";

export async function TestimonialMarqueeFetcher() {
  let testimonials;
  try {
    const data = await getTestimonials();
    testimonials = data && data.length ? data : fixtureTestimonials;
  } catch {
    testimonials = fixtureTestimonials;
  }

  return <TestimonialMarquee testimonials={testimonials} />;
}
