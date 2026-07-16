"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "react-day-picker/dist/style.css";
import "./BookingCalendar.css";

export default function BookingCalendar() {
  const [selected, setSelected] = useState<Date>();

  return (
    <div className="mt-6 text-[#f4efe7] scale-[1.28] origin-top-left">

      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}