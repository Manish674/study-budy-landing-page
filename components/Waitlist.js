"use client";

import React, { useState } from "react";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const Waitlist = () => {
  const [waitlistData, setWaitlistData] = useState({
    name: "",
    email: "",
    thoughts: "",
  });
  const [error, setError] = useState({
    isError: false,
    nameErrorMsg: "",
    emailErrorMsg: "",
  });

  const handleWaitlistStateMutation = (e) => {
    setError({ isError: false });
    setWaitlistData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (waitlistData.name.length == 0) {
      setError((prevState) => ({
        ...prevState,
        isError: true,
        nameErrorMsg: "please fill all the fields",
      }));
    }

    if (waitlistData.email.length == 0) {
      setError((prevState) => ({
        ...prevState,
        isError: true,
        emailErrorMsg: "please fill all the fields",
      }));
    }

    if (error.isError) {
      return;
    }

    try {
      const waitlistCollectionRef = collection(db, "users");
      // await addDoc(waitlistCollectionRef, {
      //   email: waitlistData.email,
      //   name: waitlistData.name,
      //   thoughts: waitlistData.thoughts,
      // });

      toast.success("Thank for signing up for waitlist!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setWaitlistData({
        name: "",
        email: "",
        thoughts: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={(e) => handleOnSubmit(e)}
      className="mt-8 flex border flex-col space-y-4 w-[80%] mx-auto"
    >
      <div className="flex flex-col">
        <input
          name="name"
          autoComplete="off"
          className="p-2 border border-[#ebebed] outline-none"
          onChange={(e) => handleWaitlistStateMutation(e)}
          value={waitlistData.name}
          placeholder="name"
        />
        <span
          className={`${error.isError ? "" : "hidden"} text-red-600 text-sm`}
        >
          {error.emailErrorMsg}
        </span>
      </div>
      <div className="flex flex-col">
        <input
          name="email"
          autoComplete="off"
          type="email"
          onChange={(e) => handleWaitlistStateMutation(e)}
          value={waitlistData.email}
          placeholder="email"
          className="p-2 border border-[#ebebed] outline-none"
        />
        <span
          className={`${error.isError ? "" : "hidden"} text-red-600 text-sm`}
        >
          {error.emailErrorMsg}
        </span>
      </div>
      <textarea
        name="thoughts"
        onChange={(e) => handleWaitlistStateMutation(e)}
        value={waitlistData.thoughts}
        placeholder="Thoughts? Share below (optional)"
        className="p-2 border border-[#ebebed] outline-none h-[152px]"
      />
      <button
        onSubmit={(e) => handleOnSubmit(e)}
        className="bg-[#e92761] text-white p-4 rounded-lg  "
      >
        Join waitlist
      </button>
    </form>
  );
};

export default Waitlist;
