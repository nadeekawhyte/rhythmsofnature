"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BookingCalendar from "./BookingCalendar";
import TimeSlots from "./TimeSlots";
import BookingDetails from "./BookingDetails";
import BookingReview from "./BookingReview";
import BookingConfirmation from "./BookingConfirmation";

export default function Booking() {

  /* States */
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();

  const [details, setDetails] = useState({
    name: "blah",
    email: "blah@blah",
    countryCode: "+61",
    phone: "blah",
    notes: "",
  });

  const [step, setStep] = 
    useState<"appointment" | "details" | "review" | "confirmed"
            >("appointment");
  
  /**************************************************************/
  return (
    <main className="bg-white text-black">
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/hero-first.png"
          alt="Nature and wellbeing"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

        <header className="absolute top-0 w-full px-12 py-8 flex justify-between text-white">
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

          <nav
            className="
              flex
              gap-12
              font-[var(--font-montserrat)]
              text-[12px]
              uppercase
              tracking-[0.28em]
              text-[#f4efe7]
            "
          >
            <Link href="/">Home</Link>
            <span>About</span>
            <span>Ayurveda</span>
            <span>Consultations</span>
            <span>Contact</span>
          </nav>
        </header>

        {/* Book Consultation */}
        <div className="absolute left-[25%] top-[18%] z-10 w-[760px]">




        {step === "appointment" && (
          <>

          <p
              className="
              font-[var(--font-inter)]
              uppercase
              tracking-[0.35em]
              text-[13px]
              text-[#f4efe7]/80
              mb-6
              "
          >
              BOOK A CONSULTATION
          </p>

          <h1
              className="
              italic
              font-light
              text-[#f7efe4]
              text-[34px]
              leading-[0.9]
              tracking-[0.02em]
              "
              style={{
              fontFamily: "var(--font-hero), serif",
              textShadow: "0px 2px 8px rgba(0,0,0,0.08)",
              }}
          >
              Select a date and time
          </h1>

          {/* <div className="flex items-center mt-8 mb-8 w-[520px]">
              <div className="h-px flex-1 bg-[#e3dac9]/50" />
              <div className="mx-4 text-[#e3dac9]/70 text-[22px] font-[var(--font-cormorant)]">
              ✥
              </div>
              <div className="h-px flex-1 bg-[#e3dac9]/50" />
          </div> */}

          <div className="h-8" />
          <p
              className="
              font-[var(--font-inter)]
              text-[17px]
              font-light
              italic
              leading-[1.75]
              tracking-[0.01em]
              text-[#f4efe7]/90
              max-w-[520px]
              "
          >
              Choose an appointment for your Ayurvedic consultation
          </p>

            <BookingCalendar
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                setSelectedTime(undefined);
              }}
            />

            {selectedDate && (
              <TimeSlots
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSelectTime={setSelectedTime}
                onContinue={() => setStep("details")}
              />
            )}
          </>
        )}

        {step === "details" && selectedDate && selectedTime && (
          <BookingDetails
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            details={details}
            setDetails={setDetails}
            onChange={() => setStep("appointment")}
            onContinue={() => setStep("review")}
          />
        )}

        {step === "review" && selectedDate && selectedTime && (
          <BookingReview
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            details={details}
            onBack={() => setStep("details")}
            onConfirm={() => setStep("confirmed")}
          />
        )}

        {step === "confirmed" && selectedDate && selectedTime && (
          <BookingConfirmation
            selectedDate={selectedDate}
            selectedTime={selectedTime}
          />
        )}

        </div>

      </section>
    </main>
  );
}