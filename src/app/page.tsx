import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PropertyList from "@/components/PropertyList";
import TextBlock from "@/components/TextBlock";
import ImageBlock from "@/components/ImageBlock";
import PromoteProperty from "@/components/PromoteProperty";

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
      </main>
    </>
  );
}
