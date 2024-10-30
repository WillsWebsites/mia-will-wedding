import Details from "@/components/Details";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[100vh] bg-gradient-to-r from-slate-800 to-slate-700">
      <Container className="flex items-center">
        <div>
          <h1 className="text-primary">Thank you!</h1>
          <p>We&apos;re excited to see you at the wedding.</p>
          <Details />
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
