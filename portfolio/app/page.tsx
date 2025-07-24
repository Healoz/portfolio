import Image from "next/image";
import Keyboard from "./components/Keyboard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-amber-100 text-black h-screen">
      <Hero />
    </div>
  );
}
