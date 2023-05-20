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

export default function Calendar() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");

  console.log("real price", searchParams.get("price"));
  console.log(price);

  const [open, setOpen] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [value, setValue] = useState([
    dayjs().hour(9).minute(30),
    dayjs().hour(13).minute(30),
  ]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const createUser = async (e) => {
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selectedDate,
        value,
        firstName,
        lastName,
        email,
        phone,
      }),
    });
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
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                      className="rounded-lg mt-4 text-center placeholder:text-left text-gray-500 font-semibold border-gray-500 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="rounded-lg mt-4 text-center placeholder:text-left text-gray-500 font-semibold border-gray-500 py-1"
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
                      placeholder="Business Name (Optional)"
                      className="rounded-lg text-center text-gray-500 font-semibold border-gray-500 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Contact Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-lg text-center text-gray-500 font-semibold border-gray-500 py-1"
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
                    <div className="text-center ">
                      <h2 className="font-bold mb-4">
                        Give Us a 4-Hour Time Frame
                      </h2>
                    </div>
                    <SingleInputTimeRangeField
                      label="Time Range"
                      value={value}
                      onChange={(value) => setValue(dayjs().format("HH:mm A"))}
                    />
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <Link
                    href={{
                      pathname: "/confirmdumpster",
                      query: { price: price },
                    }}
                  >
                    <button
                      onClick={createUser}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#f1592a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Continue
                    </button>
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
