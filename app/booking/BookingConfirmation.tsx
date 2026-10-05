type BookingConfirmationProps = {
  selectedDate: Date;
  selectedTime: string;
};

export default function BookingConfirmation({
  selectedDate,
  selectedTime,
}: BookingConfirmationProps) {
  return (
    <div className="text-[#f4efe7]">
      <h2>Thank you. Your consultation is booked.</h2>

      <p>
        {selectedDate.toLocaleDateString("en-AU", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        {" · "}
        {selectedTime}
      </p>

      <p className="mt-6">
        A confirmation will be sent to your email.
      </p>
    </div>
  );
}