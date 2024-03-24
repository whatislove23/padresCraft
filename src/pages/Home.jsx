import BigProducts from "../components/BigProducts/BigProducts.jsx";
import Feedbacks from "../components/Feedbacks/Feedbacks.jsx";
import Hero from "../components/Hero/Hero";
import OtherProducts from "../components/OtherProducts/OtherProducts.jsx";
import WhyUsSection from "../components/WhyUsSection/WhyUsSection.jsx";
import styles from "../pages/Home.module.less";
import FooterHero from "../components/FooterHero/FooterHero";

export default function Home() {
  document.title = "PadresCraft Майстерня шкіряних виробів";
  return (
    <div className={styles.wrapGap}>
      <Hero />
      <WhyUsSection />
      <Feedbacks />
      <BigProducts />
      <OtherProducts />
      <FooterHero />
    </div>
  );
}
