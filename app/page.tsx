import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#3a2e28]">
      <section className="min-h-screen grid grid-cols-2 items-center px-20 gap-16">

        <div>
          <h1 className="text-7xl font-serif font-light leading-tight mb-8">
            Find your way back to balance
          </h1>

          <p className="text-xl leading-relaxed text-[#6f6258]">
            Ayurvedic guidance for restoring harmony between body,
            mind and the rhythms of nature.
          </p>

          <button className="mt-10 px-8 py-3 rounded-full border">
            Begin your journey
          </button>
        </div>

        <div>
          <Image
            src="/images/hero.jpg"
            alt="Natural wellbeing"
            width={600}
            height={800}
            className="rounded-t-full"
          />
        </div>

      </section>
    </main>
  );
}