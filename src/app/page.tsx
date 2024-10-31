import Container from "@/components/ui/Container";
import ReservationForm from "@/components/pages/Home/ReservationForm";
import Details from "@/components/Details";
import Image from "next/image";
import image2 from "../../public/2.jpg";
import car from "../../public/car.jpg";

export default function HomePage() {
  return (
    <section className="flex min-h-[100vh] bg-gradient-to-r from-slate-800 to-slate-700">
      <Container className="items-center gap-12 md:flex">
        <div className="w-full md:w-1/2">
          <h1 className="font-tangerine text-3xl text-primary sm:text-4xl xl:text-6xl">
            Will & Mia Schaefermeyer
          </h1>
          <p className="mb-6 text-white/80">
            Wedding reception invitation and RSVP
          </p>
          <Details />
          <ReservationForm />
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 md:w-1/2 md:gap-0">
          <Image
            src={car}
            alt="Will & Mia"
            className="w-full max-w-[350px] -rotate-3 rounded-lg md:max-w-[300px] lg:max-w-[350px]"
          />
          <Image
            src={image2}
            alt="Will & Mia"
            className="w-full max-w-[350px] rotate-2 rounded-lg md:mr-16 md:max-w-[300px] md:-translate-y-8 lg:max-w-[350px]"
          />
        </div>
      </Container>
    </section>
  );
}
