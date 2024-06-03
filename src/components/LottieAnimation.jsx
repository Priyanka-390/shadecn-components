"use client"
import Lottie from "lottie-react"
import priceanimation from "../../public/assets/lotties/animation-1.json"
const LottieAnimation = () => {
  return (
    <div className="flex justify-center pt-16 flex-col items-center">
      <h2 className="text-black text-5xl py-4 text-center font-bold">
       LOTTIE-ANIMATION
      </h2>
      <Lottie
        animationData={priceanimation}
        width={10}
        height={20}
        className="max-w-[200px] h-[260px]"
      />
    </div>
  );
}

export default LottieAnimation
