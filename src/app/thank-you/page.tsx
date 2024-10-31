import Details from "@/components/Details";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[100vh] bg-gradient-to-r from-slate-800 to-slate-700">
      <Container className="flex items-center justify-center text-center">
        <div>
          <h1 className="font-tangerine text-3xl text-primary sm:text-4xl xl:text-6xl">
            Thank you!
          </h1>
          <p className="mb-12 text-white/80">
            We&apos;re excited to see you at the reception.
          </p>
          <Details />
          <Button asChild className="mt-12">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
