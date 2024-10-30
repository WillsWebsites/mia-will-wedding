import Container from "@/components/ui/Container";
import ReservationForm from "@/pages/Home/ReservationForm";

export default function HomePage() {
  return (
    <section className="flex min-h-[100vh] bg-gradient-to-r from-slate-800 to-slate-700">
      <Container className="flex items-center">
        <div>
          <h1 className="text-primary">Will & Mia Schaefermeyer</h1>
          <p>Wedding reception invitation and RSVP</p>
          <h2 className="text-primary">Details</h2>
          <p>11/16/2024 - 5:00-8:00pm</p>
          <p>
            Chillon Reception Center. 710 E Center St, Spanish Fork, UT 84660
          </p>

          <ReservationForm />
        </div>
      </Container>
    </section>
  );
}
