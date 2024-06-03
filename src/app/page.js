import Buttons from "@/components/Buttons";
import { Corouselp } from "@/components/Corouselp";
import LottieAnimation from "@/components/LottieAnimation";
import Practice from "@/components/Practice";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Practice />
      <LottieAnimation />
      <Buttons />
      <Corouselp/>
   </div>
  );
}
