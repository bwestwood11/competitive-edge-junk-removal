"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsExclamationTriangle, BsXCircle } from "react-icons/bs";
import { AiOutlineSchedule } from "react-icons/ai";
import Link from "next/link";
import {
  DateCalendar,
  MultiInputTimeRangeField,
} from "@mui/x-date-pickers-pro";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Calendar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const price = searchParams.get("price");

  console.log("real price", searchParams.get("price"));
  console.log(price);

  const [open, setOpen] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState([
    dayjs().hour(9).minute(30),
    dayjs().hour(13).minute(30),
  ]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleTimeChange = (newTime) => {
    setTime(newTime.map(t => dayjs(t)));
  };

  // Create a user in database with the information they provided using the form and then redirect them to the confirmation page
  const createUser = async (e) => {
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      timeZone: "America/New_York",
    };

    const timeoptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "America/New_York",
    }

    if(!selectedDate) {
      toast.error("Please select a date");
      return;
    }
    if(!firstName) {
      toast.error("Please enter your first name");
      return;
    }
    if(!lastName) {
      toast.error("Please enter your last name");
      return;
    }
    if(!email ) {
      toast.error("Please enter your email");
      return;
    }
    if(!address) {
      toast.error("Please enter your address");
      return;
    }
    if(!phone ) {
      toast.error("Please enter your phone number");
      return;
    }
    
// new Intl.DateTimeFormat("en-US", timeoptions).format(time[0]) + " - " + new Intl.DateTimeFormat("en-US", timeoptions).format(time[1])
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selectedDate: new Intl.DateTimeFormat("en-US", options).format(selectedDate),
        time: `${time[0].format("hh:mm A")} - ${time[1].format("hh:mm A")}`,
        firstName,
        lastName,
        email,
        address,
        phone,
        notes,
      }),
    });

    const data = await response.json();
    console.log("information needed", data.stripeId);
    router.push(`/waiver?price=${price}&stripeId=${data.stripeId}&email=${email}`)
    
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f1592a] focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <BsXCircle className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <h1 className="text-left font-bold text-2xl"> Contact </h1>
                  <div className="relative flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 absolute top-6 left-2"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <input
                      type="text"
                      placeholder="     First Name"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="rounded-lg mt-4 w-1/2 text-center placeholder:text-left text-gray-500 font-semibold border-gray-500 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="rounded-lg w-1/2 mt-4 text-center placeholder:text-left text-gray-500 font-semibold border-gray-500 py-1"
                    />
                  </div>
                  <div className="flex flex-col mt-4 relative gap-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 absolute top-2 left-2"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>

                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded-lg text-center text-gray-500 font-semibold border-gray-500 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Address for Delivery"
                      className="rounded-lg text-center text-gray-500 font-semibold border-gray-500 py-1"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Contact Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-lg text-center text-gray-500 font-semibold border-gray-500 py-1"
                    />
                    <textarea
                      type="text"
                      placeholder="Any Special Requests or Concerns?"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="rounded-lg text-center align-middle text-gray-500 font-semibold border-gray-500 py-1"
                    />
                  </div>
                </div>

                {/* Calendar Starts Here */}
                <div className="sm:flex">
                  <Link href="/">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <AiOutlineSchedule
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>

                  <div className="mt-3 text-center items-center mx-auto justify-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Calendar
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Please Select a date for drop off:
                      </p>
                    </div>
                    <DateCalendar
                      disablePast
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                    <div className="text-center flex flex-col w-2/3 mx-auto align-middle justify-center ">
                      <h2 className="font-semibold leading-7 text-gray-900 mb-4">
                        Give us a 4-hour time frame for delivery.
                      </h2>
                   
                    <SingleInputTimeRangeField
                      label="Time Range"
                      value={time}
                      onChange={handleTimeChange}
                    /> 
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={createUser}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#f1592a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f1592a]/70 sm:ml-3 sm:w-auto"
                    >
                      Continue
                    </button>
                  {/* </Link> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
