import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const title = useRef();
  const subtitle = useRef();
  const scroll = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(title.current, {
      y: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    tl.from(
      subtitle.current,
      {
        y: 50,
        opacity: 0,
        duration: 0.8
      },
      "-=0.7"
    );

    tl.from(
      scroll.current,
      {
        opacity: 0,
        duration: 1
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className="h-screen relative flex items-center">

  <div className="absolute top-10 left-10 text-sm text-zinc-500">
    CREATIVE ARCHIVE
  </div>

  <div className="px-20">

    <h1 className="text-[10rem] font-black leading-none">
      AZI
    </h1>

    <p className="mt-4 text-2xl text-zinc-300">
      Photography • Videography • Web Experiences
    </p>

  </div>

  <div className="absolute bottom-20 right-20">

    <div className="mb-4 text-zinc-500">
      SELECTED WORKS
    </div>

    <div>Ferrari Clone</div>
    <div>The Legends</div>
    <div>Visual Archive</div>

  </div>

</section>

    
  );
}

<section className="min-h-screen flex items-center px-20">

  <div className="max-w-5xl">

    <p className="text-zinc-500 mb-4">
      ABOUT
    </p>

    <h2 className="text-7xl font-light leading-tight">
      I create visual experiences through
      photography, videography,
      design and web development.
    </h2>

  </div>

</section>