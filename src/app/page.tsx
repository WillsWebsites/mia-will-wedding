import Container from "@/components/ui/Container";
import ReservationForm from "@/components/pages/Home/ReservationForm";
import Details from "@/components/Details";

export default function HomePage() {
  return (
    <section className="flex min-h-[100vh] bg-gradient-to-r from-slate-800 to-slate-700">
      <Container className="flex items-center">
        <div>
          <h1 className="text-primary">Will & Mia Schaefermeyer</h1>
          <p>Wedding reception invitation and RSVP</p>
          <Details />
          <ReservationForm />
        </div>
      </Container>
    </section>
  );
}
