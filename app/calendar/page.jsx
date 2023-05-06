"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { BsExclamationTriangle, BsXCircle } from "react-icons/bs";
import { AiOutlineSchedule } from 'react-icons/ai'
import Link from "next/link";
import { DateCalendar, MultiInputTimeRangeField } from "@mui/x-date-pickers-pro";
import { SingleInputTimeRangeField } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import axios from 'axios';
import { useRouter } from "next/navigation";



export default function Calendar({price}) {
  const router = useRouter()
  const [open, setOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState('');
  const [value, setValue] = useState([dayjs().hour(9).minute(30), dayjs().hour(13).minute(30)]);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate)
  }

const createUser = async () => {
 fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, selectedDate, value })
 })
}


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
                <div className="sm:flex sm:items-start">
                    <Link href='/'>
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <AiOutlineSchedule
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  </Link>
                  <div className="mt-3 text-center item-center mx-auto sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Calendar
                    </Dialog.Title>
                    <div className="mt-2"> 
                     <label className="mr-4">Enter Your Name</label>
                      <input className="border px-3 py-2 rounded-md mb-4" type="text" placeholder="Your Name..." value={name} onChange={(e) => setName(e.target.value)} />
                      <p className="text-sm text-gray-500">
                        Please Select a Date below.
                      </p>
                    
                    </div>
                    <DateCalendar disablePast value={selectedDate} onChange={handleDateChange}/>
                    <div className="text-center ">
                      <h2 className="font-bold mb-4">Give Us a 4-Hour Time Frame</h2>
                    </div>
                    <SingleInputTimeRangeField
  label="Time Range"
  value={value}
  onChange={(newValue) => setValue(dayjs(newValue).format('HH:mm A'))}
/>
                  </div>
                  
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">  
                    <button
                    onClick={createUser}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#f1592a] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Next
                    </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
