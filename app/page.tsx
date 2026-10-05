import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden">

        <Image
          src="/images/hero-first.png"
          alt="Nature and wellbeing"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/25" />

        <header className="
          absolute
          top-0
          w-full
          px-12
          py-8
          flex
          justify-between
          text-white
        ">

          <div className="text-center">

            <h1
              className="
                font-[var(--font-cormorant)]
                italic
                text-[14px]
                font-light
                leading-[0.9]
                tracking-[0.02em]
                text-[#f4efe7]
              "
            >
              Rhythms of Nature
            </h1>

            <p
              className="
                mt-3
                font-[var(--font-montserrat)]
                text-[10px]
                uppercase
                tracking-[0.55em]
                text-[#f4efe7]/90
              "
            >
              AYURVEDA
            </p>

          </div>

          <nav className="
            flex
            gap-12
            font-[var(--font-montserrat)]
            text-[12px]
            uppercase
            tracking-[0.28em]
            text-[#f4efe7]
          ">
            <span>Home</span>
            <span>About</span>
            <span>Ayurveda</span>
            <span>Consultations</span>
            <span>Contact</span>
          </nav>

        </header>


        <div className="
          absolute
          left-[4%]
          top-[40%]
          z-10
          select-none
        ">

          <h1
            className="
              font-serif
              italic
              font-light
              text-[#f7efe4]
              text-[92px]
              leading-[0.78]
              tracking-[0.02em]
              dynamic-text
            "
            style={{
              fontFamily: "var(--font-hero), serif",
              textShadow: "0px 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            Live in rhythm
            <br />
            <span>with your nature</span>
          </h1>


          <div className="flex items-center mt-8 mb-8 w-[520px]">

            <div className="h-px flex-1 bg-[#e3dac9]/50" />

            <div className="
              mx-4
              text-[#e3dac9]/70
              text-[22px]
              font-[var(--font-cormorant)]
            ">
              ✥
            </div>

            <div className="h-px flex-1 bg-[#e3dac9]/50" />

          </div>


          <p className="
            font-[var(--font-inter)]
            text-[17px]
            font-light
            leading-[1.75]
            tracking-[0.01em]
            text-[#f4efe7]/90
            max-w-[520px]
          ">
            A gentle Ayurvedic approach to understanding your body,
            <br />
            restoring harmony, and creating a way of living
            <br />
            that truly nourishes you.
          </p>

          <Link href="/booking">
            <button className="
              mt-10
              border
              border-[#f4efe7]/50
              px-8
              py-4
              font-[var(--font-montserrat)]
              text-[13px]
              tracking-[0.25em]
              uppercase
              text-[#f4efe7]

              transition-all
              duration-300
              hover:bg-[#f4efe7]/10
              hover:tracking-[0.25em]
              hover:border-[#f4efe7]/80
              cursor-pointer
            ">
              Begin your journey →
            </button>
          </Link>  




        </div>



      </section>


      {/* z-0   herbs
      z-10  main text
      z-0  herbs
      z-30  bottom band */}


      {/* PHILOSOPHY */}
      <section className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#000000]
        px-8
      ">

      {/* #f3e8d3 Herb Image */}
      <div className="
        absolute
        inset-0
        z-20
        pointer-events-none
        // bg-[url('/images/ash-thu-shat-neem-bhring-guducci.png')]
        bg-[url('/images/gemini/gemini-herbs-big.png')]
        bg-[length:70%_auto]
        bg-no-repeat
        bg-right-bottom
        bg-[length:60%_auto]
      " />


         {/* Text on Page 2 */}
        <div className="
          relative
          z-30
          max-w-3xl
          mx-auto
          text-left
          pt-[24vh]
          -translate-x-16
        ">

          {/* Soft glow of the text */}
          <div
            className="
              absolute
              left-[-120px]
              top-[-120px]
              w-[900px]
              h-[700px]
              rounded-full
              pointer-events-none
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,245,220,0.05) 0%, rgba(255,245,220,0.02) 35%, rgba(255,245,220,0) 70%)",
            }}
          />

          <p className="
            font-[var(--font-inter)]
            uppercase
            tracking-[0.35em]
            text-[28px]
            text-[#8a7b68]
            text-[#a19380]
            mb-10
          ">
            THE AYURVEDIC WAY
          </p>

          <h2 className="
            font-[var(--font-cormorant)]
            italic
            font-light
            text-[74px]
            leading-[1]
            text-[#6f6258]
            [text-shadow:0_0_1px_rgba(255,255,255,0.08)]
          ">
            As within, so without
          </h2>


          <div className="
            mr-auto
            my-10
            h-px
            w-40
            bg-[#8a7b68]/40
          " />

          <p className="
            font-[var(--font-inter)]
            text-[22px]
            italic
            leading-[1.9]
            text-[#6f6258]
            max-w-xl
          ">
            Ayurveda teaches that we are not separate from nature
            <br />
            but an expression of it. The rhythms of the seasons,
            <br />
            the cycles of the day, and the elements around us
            <br />
            are reflected within us. Health and wellbeing happen 
            <br />
            when we live in harmony with those rhythms.
          </p>

        </div>


        {/* Bottom border */}
        {/* <div className="
          absolute
          z-10
          bottom-0
          left-0
          w-full
          bg-[#e5d3b5]
          py-8
          text-center
        ">

          <p className="
            relative
            z-30
            font-[var(--font-cormorant)]
            italic
            text-[32px]
            tracking-[0.04em]
            text-[#5f5748]
          ">
            When we align with nature, healing happens
          </p>


          <div className="
            relative
            z-30
          ">

            — Ayurvedic Wisdom — 
          </div>

        </div> */}

      </section>

    </main>
  );
}