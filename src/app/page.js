import { AboutUs } from "@/components/AboutUs";
import { Banner } from "@/components/Banner";
import { Contact, } from "@/components/Contact";
import { Products } from "@/components/Products";
import { VM } from "@/components/VM";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <VM />
      <Products />
      <WhyUs />
      <Contact /> 
    </>
  );
}