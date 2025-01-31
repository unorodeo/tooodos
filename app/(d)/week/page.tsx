import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Stats } from "@/components/core/stats";
import { seo } from "@/lib/metadata";

export const metadata: Metadata = seo({
  title: "Week",
  description: "All the todos for the week.",
});

export default function Page() {
  return (
    <Section className="max-w-5xl mt-8">
      <div className="grid">
        <h1 className="font-semibold md:text-3xl">Welcome, [[username]]</h1>
        <p className="lead [&:not(:first-child)]:mt-2">
          Here are your analytics for the day.
        </p>
      </div>
      <div className="mt-12">
        <Stats />
      </div>
    </Section>
  );
}
