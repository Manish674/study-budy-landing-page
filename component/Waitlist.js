"use client";

import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const Waitlist = () => {
  const [waitlistData, setWaitlistData] = useState({
    name: "",
    email: "",
    thoughts: "",
  });

  const handleWaitlistStateMutation = (e) => {
    setWaitlistData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "waitlist"), { waitlist: waitlistData });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={(e) => handleOnSubmit(e)} className="mt-8 flex flex-col space-y-4 w-[80%] mx-auto border border-black">
      <input
        name="name"
        autoComplete="off"
        onChange={(e) => handleWaitlistStateMutation(e)}
        value={waitlistData.name}
        placeholder="name"
        className="p-2 border border-[#ebebed] outline-none"
      />
      <input
        name="email"
        autoComplete="off"
        type="email"
        onChange={(e) => handleWaitlistStateMutation(e)}
        value={waitlistData.email}
        placeholder="email"
        className="p-2 border border-[#ebebed] outline-none"
      />
      <textarea
        name="thoughts"
        onChange={(e) => handleWaitlistStateMutation(e)}
        value={waitlistData.thoughts}
        placeholder="Thoughts? Share below (optional)"
        className="p-2 border border-[#ebebed] outline-none h-[152px]"
      />
      <button onSubmit={(e) => handleOnSubmit(e)} className="bg-[#e92761] text-white p-4 rounded-lg  ">
        Join waitlist
      </button>
    </form>
  );
};

export default Waitlist;
