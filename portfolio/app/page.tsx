import Image from "next/image";
import Keyboard from "./components/Keyboard";

export default function Home() {
  return (
    <div className="bg-amber-100 text-black h-screen">
      <p>Hi there friend</p>
      <Keyboard />
    </div>
  );
}
