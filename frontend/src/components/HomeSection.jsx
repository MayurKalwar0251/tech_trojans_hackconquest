import { Button } from "./ui/Button";
import Img from "../assets/HIMS.png";

export default function HomeSection() {
  return (
    <div className="">
      <section className="max-h-screen w-[85vw] container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hospital Management Software
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Everything you need to run a hospital
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary text-primary-foreground bg-black text-white">
              Schedule a demo
            </Button>
            <Button variant="outline">Download Brochure</Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={Img}
            width={600}
            height={600}
            alt="Medical professionals standing around a medical cross symbol"
            className="w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
