import Container from "@/components/ui/Container";
import ReservationForm from "@/components/pages/Home/ReservationForm";
import Details from "@/components/Details";
import Image from "next/image";
import image1 from "../../public/1.jpeg";
import image2 from "../../public/2.jpg";

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
        <div>
          <Image
            src={image1}
            alt="Will & Mia"
            className="w-full max-w-[250px] rounded-lg"
          />
          <Image
            src={image2}
            alt="Will & Mia"
            className="w-full max-w-[250px] rounded-lg"
          />
        </div>
      </Container>
    </section>
  );
}
