import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PropertyList from "@/components/PropertyList";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";
import PromoteProperty from "@/components/PromoteProperty";
import CitiesCarousel from "@/components/CitiesCarousel";
import CTA from "@/components/CTA";
import CozySpotSection from "@/components/CozySpotSection";
import BlogSection from "@/components/BlogSection";
import CTAJoinNetimoveis from "@/components/CTAJoinNetimoveis";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <PropertyList />
        <TextBlock />
        <ImageBlock />
        <PromoteProperty />
        <CitiesCarousel />
        <CTA />
        <CozySpotSection />
        <BlogSection />
        <CTAJoinNetimoveis />
        <Footer />
      </main>
    </>
  );
}
