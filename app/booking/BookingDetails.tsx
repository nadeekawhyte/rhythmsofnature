"use client";

type BookingDetailsProps = {
  selectedDate: Date;
  selectedTime: string;

  details: {
    name: string;
    email: string;
    countryCode: string;
    phone: string;
    notes: string;
  };

  setDetails: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      countryCode: string;
      phone: string;
      notes: string;
    }>
  >;

  onChange: () => void;
  onContinue: () => void;
};

export default function BookingDetails({
  selectedDate,
  selectedTime,
  details,
  setDetails,
  onChange,
  onContinue,
}: BookingDetailsProps) {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // next booking step
  }

  return (
    <div className="mt-6 text-[#f4efe7] max-w-[520px]">

      {/* Appointment summary */}
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
        YOUR CONSULTATION
      </p>

      <div className="flex items-center gap-6 mb-10">
        <p className="text-[17px] font-light">
          {selectedDate.toLocaleDateString("en-AU", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {" · "}
          {selectedTime}
        </p>

        <button
          type="button"
          onClick={onChange}
          className="
            text-[11px]
            uppercase
            tracking-[0.15em]
            border-b
            border-[#e3dac9]/50
            transition-all
            duration-300
            hover:border-[#e3dac9]
            cursor-pointer
          "
        >
          Change
        </button>
      </div>

      <h2
        className="
          italic
          font-light
          text-[#f7efe4]
          text-[34px]
          mb-8
        "
        style={{
          fontFamily: "var(--font-hero), serif",
        }}
      >
        Your details
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-[12px] tracking-[0.12em] mb-2"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              value={details.name}
                onChange={(event) =>
                /* copy all properties of "details", then replace "name" */
                setDetails({
                    ...details,
                    name: event.target.value,
                })
                }
              required
              minLength={2}
              autoComplete="name"
              className="
                w-full
                bg-transparent
                border
                border-[#e3dac9]/50
                px-4 py-3
                outline-none
                transition-all
                duration-300
                focus:border-[#e3dac9]
                focus:bg-[#e3dac9]/10
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-[12px] tracking-[0.12em] mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
                value={details.email}
                onChange={(event) =>
                setDetails({
                    ...details,
                    email: event.target.value,
                })
                }              required
              autoComplete="email"
              className="
                w-full
                bg-transparent
                border
                border-[#e3dac9]/50
                px-4 py-3
                outline-none
                transition-all
                duration-300
                focus:border-[#e3dac9]
                focus:bg-[#e3dac9]/10
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-[12px] tracking-[0.12em] mb-2"
            >
              Phone
            </label>

            <div className="flex">
              <select
                aria-label="Country calling code"
                value={details.countryCode}
                /* copy over all property values of details, but change countrycode*/
                onChange={(event) =>
                    setDetails({
                        ...details,
                        countryCode: event.target.value,
                    })
                }                className="
                  bg-transparent
                  border
                  border-[#e3dac9]/50
                  px-3
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#e3dac9]
                  focus:bg-[#e3dac9]/10
                "
              >
                <option value="+61">AU +61</option>
                <option value="+64">NZ +64</option>
                <option value="+44">UK +44</option>
                <option value="+1">US +1</option>
              </select>

              <input
                id="phone"
                type="tel"
                value={details.phone}
                onChange={(event) =>
                setDetails({
                    ...details,
                    phone: event.target.value,
                })
                }                required
                pattern="[0-9 ()+-]{7,20}"
                title="Please enter a valid phone number"
                autoComplete="tel"
                className="
                  flex-1
                  bg-transparent
                  border
                  border-l-0
                  border-[#e3dac9]/50
                  px-4 py-3
                  outline-none
                  transition-all
                  duration-300
                  focus:border-[#e3dac9]
                  focus:bg-[#e3dac9]/10
                "
              />
            </div>
          </div>

        <div>
        <label
            htmlFor="notes"
            className="block text-[12px] tracking-[0.12em] mb-2"
        >
            Notes <span className="text-[#f4efe7]/60">(optional)</span>
        </label>

        <textarea
            id="notes"
            rows={1}
            maxLength={75}
            value={details.notes}
            onChange={(event) =>
            setDetails({
                ...details,
                notes: event.target.value,
            })
            }
            placeholder=""
            className="
            w-full
            bg-transparent
            border
            border-[#e3dac9]/50
            px-4 py-3
            outline-none
            resize-none
            transition-all
            duration-300
            placeholder:text-[#f4efe7]/40
            focus:border-[#e3dac9]
            focus:bg-[#e3dac9]/10
            "
        />
        </div>

        </div>

        <button
          type="submit"
          className="
            mt-8
            border
            border-[#e3dac9]/50
            px-8 py-4
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
      </form>

    </div>
  );
}
