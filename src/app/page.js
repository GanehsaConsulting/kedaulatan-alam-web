import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { Contact, } from "@/components/Contact";
import { Products } from "@/components/Products";
import { VM } from "@/components/VM";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <AnimateOnce animation={'animate__backInDown'}>
        <Banner />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <AboutUs />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <VM />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Products />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <WhyUs />
      </AnimateOnce>

      <AnimateOnce animation={'animate__fadeInUpBig'}>
        <Contact />
      </AnimateOnce>

    </>
  );
}