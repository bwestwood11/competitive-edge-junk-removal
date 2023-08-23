"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const WaiverForm = () => {
  const [fullName, setFullName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const stripeId = searchParams.get("stripeId");
  const email = searchParams.get("email");
  console.log("confirm price", price);
  console.log("confirm stripeId", stripeId);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission and digital signature here
    
    if(!isChecked) {
        toast.error("Please check the box to confirm you agree to the terms and conditions.");
    }

    if(!fullName) {
        toast.error("Please enter your full name.");
    }
 
    if(isChecked && fullName) {
    const response = await fetch("/api/waiver", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        isChecked,
      }),
    });
    console.log("Form submitted:", fullName, isChecked);
    router.push(
      `/confirmdumpster?price=${price}&stripeId=${stripeId}&email=${email}`
    );
  }
  };

  return (
    <div className="mx-auto text-center bg-gray-50 py-8">
      <form className="max-w-lg mx-auto text-left" onSubmit={handleSubmit}>
        <div className="flex mt-4 min-h-3/4">
          <div className="max-w-lg p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Waiver Form</h2>
            <div className="h-80 overflow-y-auto border border-gray-300 p-4">
              {/* Your waiver content goes here */}
              <p>
                This Dumpster Damage Waiver Form ("Form") is an agreement
                between the undersigned client ("Client") and Competitive Edge
                Dumpsters ("Company"). By using the services provided by the
                Company, the Client acknowledges and agrees to the following
                terms and conditions:
                 Responsibility: The Client agrees to
                assume full responsibility for any damage caused to the dumpster
                provided by the Company during the duration of its use. Damage
                Charges: In the event that the dumpster is damaged while in the
                possession of the Client, whether due to negligence, improper
                use, or any other reason, the Client agrees to pay for all
                repair or replacement costs associated with the damage.
                Notification: The Client shall promptly inform the Company if
                any damage to the dumpster is noticed while it is in their
                possession. Failure to notify the Company promptly may result in
                additional charges. Liability: The Client shall indemnify and
                hold the Company harmless from any claims, liabilities, costs,
                and expenses arising from the use of the dumpster or any damage
                caused to the dumpster. No Insurance Coverage: The Client
                acknowledges that the Company's insurance policies may not cover
                damage caused by the Client to the dumpster. The Client is
                advised to check their own insurance coverage for any potential
                liability. By signing this Form on our website, the Client
                acknowledges that they have read, understood, and agreed to the
                terms and conditions outlined above. The Client accepts full
                responsibility for the proper use and care of the dumpster
                provided by the Competitive Edge Dumpsters, LLC and agrees to
                pay for any damages incurred.
              </p>
              {/* Add more content as needed */}
            </div>
            <label className="block my-2">
              Electronic Signature:
              <input
                type="text"
                className="w-full border rounded px-2 py-1 mt-1"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>

            <label className="block my-4">
              <input
                type="checkbox"
                className="mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              I acknowledge and agree to the terms and conditions outlined in
              this Dumpster Damage Waiver Form.
            </label>

            <button
              type="submit"
              className={`bg-orange-500 text-white px-4 py-2 rounded ${
                isChecked
                  ? "hover:bg-orange-600"
                  : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WaiverForm;
