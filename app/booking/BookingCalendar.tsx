"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./BookingCalendar.css";

type BookingCalendarProps = {
  selected?: Date;
  onSelect: (date: Date | undefined) => void;
};

export default function BookingCalendar({
  selected,
  onSelect,
}: BookingCalendarProps) {
  return (
    <div className="mt-6 text-[#f4efe7]">
      <div className="scale-[1.28] origin-top-left">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}