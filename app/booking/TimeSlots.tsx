type TimeSlotsProps = {
  selectedDate: Date;
  selectedTime?: string;
  onSelectTime: (time: string) => void;
  onContinue: () => void;
};

export default function TimeSlots({
  selectedDate,
  selectedTime,
  onSelectTime,
  onContinue,
}: TimeSlotsProps) {
  const times = ["9:00 am", "10:30 am", "1:00 pm", "2:30 pm"];

  return (
    <div className="mt-28 text-[#f4efe7]">
      <p className="mb-4 text-[14px] tracking-[0.08em]">
        Available times on{" "}
        <span className="font-semibold">
            {selectedDate.toLocaleDateString("en-AU", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            })}
        </span>
      </p>

      <div className="flex gap-3">
        {times.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => onSelectTime(time)}
            className={`
              border
              px-4 py-2
              text-[13px]
              transition-all
              duration-300
              cursor-pointer
              ${
                selectedTime === time
                  ? "border-[#e3dac9] bg-[#e3dac9]/25"
                  : "border-[#e3dac9]/50 hover:border-[#e3dac9]/80 hover:bg-[#e3dac9]/10"
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>

      {selectedTime && (
        <button
          type="button"
          onClick={onContinue}
          className="
            mt-6
            border border-[#e3dac9]/50
            px-6 py-3
            text-[12px]
            uppercase
            tracking-[0.2em]
            transition-all
            duration-300
            hover:border-[#e3dac9]/80
            hover:bg-[#e3dac9]/10
            cursor-pointer
          "
        >
          Continue
        </button>
      )}
    </div>
  );
}