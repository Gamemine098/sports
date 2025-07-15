"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".start_web",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".start_web",
          start: "top 90%",
          end: "top 30%",
          toggleActions: "play reverse play reverse",
        },
      },
    );

    gsap.to(".parallax-bg", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    ScrollTrigger.create({
      trigger: ".snap-container",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: 1 / (document.querySelectorAll(".snap-section").length - 1),
        duration: { min: 0.3, max: 0.6 },
        delay: 0.05,
        ease: "power1.inOut",
      },
    });

    gsap.utils.toArray(".fadeup-target").forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });
  }, []);

  return (
    <>
      <ReactLenis root>
        <div className="snap-container">
          <section className="parallax-section snap-section relative flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center">
            <div
              className="parallax-bg absolute inset-0 z-0 bg-black/30 backdrop-blur-sm"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
              }}
            />
            <div className="relative z-10 rounded-lg bg-white/10 px-3 py-5 text-center backdrop-blur-lg">
              <p className="start_web translate-y-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-7xl font-bold text-transparent opacity-0 text-shadow-lg">
                Badminton
              </p>
              <p className="start_web translate-y-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent opacity-0 text-shadow-lg">
                แบดมินตัน
              </p>
            </div>
          </section>
          <section className="snap-section flex h-screen flex-col items-center justify-center">
            <div className="relative z-10 max-w-2xl rounded-lg bg-white/10 px-8 py-10 backdrop-blur-2xl">
              <h2 className="fadeup-target mb-6 translate-y-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent opacity-0 text-shadow-lg">
                ประวัติแบดมินตัน
              </h2>
              <div className="text-lg">
                <p className="fadeup-target translate-y-10 opacity-0">
                  กำเนิด: แบดมินตันมีต้นกำเนิดมาจากเกมที่ชื่อว่า Poona
                  ในประเทศอินเดีย ช่วงศตวรรษที่ 19
                  ซึ่งทหารอังกฤษได้นำกลับไปเผยแพร่ในประเทศอังกฤษ
                </p>
                <p className="fadeup-target mt-2 translate-y-10 opacity-0">
                  พัฒนาในอังกฤษ: ปี ค.ศ.1873 เกมนี้ได้รับความนิยมในอังกฤษ
                  โดยเฉพาะในงานเลี้ยงของ ดยุคแห่งบิวฟอร์ต ที่คฤหาสน์ชื่อ
                  แบดมินตันเฮาส์ ซึ่งกลายเป็นที่มาของชื่อกีฬา
                </p>
                <p className="fadeup-target mt-2 translate-y-10 opacity-0">
                  กฎกติกา: กำหนดมาตรฐานกติกาขึ้นครั้งแรกโดย Bath Badminton Club
                  ในปี ค.ศ.1877
                </p>
                <p className="fadeup-target mt-2 translate-y-10 opacity-0">
                  สหพันธ์แบดมินตันโลก (IBF): ก่อตั้งเมื่อ ปี 1934 (ปัจจุบันคือ
                  BWF - Badminton World Federation)
                  เพื่อควบคุมและพัฒนากีฬานี้ในระดับสากล
                </p>
                <p className="fadeup-target mt-2 translate-y-10 opacity-0">
                  โอลิมปิก: แบดมินตันบรรจุเป็นกีฬาสาธิตในโอลิมปิกปี 1972
                  และเป็นกีฬาอย่างเป็นทางการใน โอลิมปิกปี 1992 ที่บาร์เซโลนา
                </p>
              </div>
            </div>
          </section>
          <section className="snap-section flex h-screen flex-col items-center justify-center">
            <div className="relative z-10">
              <h2 className="fadeup-target mb-6 translate-y-10 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent opacity-0 text-shadow-lg">
                ทำไมถึงชอบแบดมินตัน?
              </h2>
            </div>
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
