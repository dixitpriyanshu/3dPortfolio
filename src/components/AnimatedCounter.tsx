import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter?.querySelector(
        ".counter-number"
      ) as HTMLDivElement | null;
      const item = counterItems[index];

      if (!numberElement || !item) return;

      const obj = { val: 0 };

      ScrollTrigger.create({
        trigger: counter,
        start: "top 80%",
        onEnter: () => {
          gsap.to(obj, {
            val: item.value,
            duration: 0.5,
            ease: "power2.out",
            onUpdate: () => {
              numberElement.textContent = `${Math.floor(obj.val)}${
                item.suffix
              }`;
            },
          });
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) countersRef.current[index] = el;
            }}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
