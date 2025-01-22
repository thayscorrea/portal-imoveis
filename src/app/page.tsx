import Header from "@/components/Header";
import Banner from "@/components/Banner";
import PropertyList from "@/components/PropertyList";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <PropertyList />
      </main>
    </>
  );
}
