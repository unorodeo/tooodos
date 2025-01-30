import { Icons } from "@/components/ui/icons";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="grid justify-center mt-24">
          <div className="flex flex-col items-center mb-24">
            <Icons.Brand
              width={100}
              height={100}
            />
          </div>
          <h1>Create, plan and manage simple todo tasks</h1>
        </div>
      </Section>
    </>
  );
}
