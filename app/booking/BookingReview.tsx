type BookingReviewProps = {
  selectedDate: Date;
  selectedTime: string;
  onBack: () => void;
  onConfirm: () => void;

  details: {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    notes: string;
  };
};

export default function BookingReview({
  selectedDate,
  selectedTime,
  details,
  onBack,
  onConfirm,
}: BookingReviewProps) {
  return (
    <div className="text-[#f4efe7]">
      <h2>Review your booking</h2>

      <p>
        {selectedDate.toLocaleDateString("en-AU")} · {selectedTime}
      </p>

      <p>{details.name}</p>
      <p>{details.email}</p>
      <p>
        {details.countryCode} {details.phone}
      </p>

      {details.notes && <p>{details.notes}</p>}

<div className="flex gap-4 mt-8">
  <button
    type="button"
    onClick={onBack}
    className="
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
    Back
  </button>

  <button
    type="button"
    onClick={onConfirm}
    className="
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
    Confirm booking
  </button>
</div>

      
    </div>
  );


  
}