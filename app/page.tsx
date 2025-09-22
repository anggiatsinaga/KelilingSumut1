import Image from "next/image";
import Hero from "./components/Hero";
import DestinasiPopuler from "./components/DestinasiPopuler";
import KategoriWisata from "./components/KategoriWisata";
import Flutter from "./components/Flutter";

export default function Home() {
  return (
    <>
    <Hero/>
    <DestinasiPopuler/>
    <KategoriWisata/>
    <Flutter/>
    </>
  );
}
