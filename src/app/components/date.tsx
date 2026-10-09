'use client'
import React from 'react';
import { useEffect, useState } from "react";

const DatePage = () => {
const [date, setDate] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
      const today = new Date();

      setDate(
        today.toLocaleDateString("bn-BD", {
          dateStyle: "full",
        })
      );
    }, 0);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
    {date}
    </div>
  );
};

export default DatePage;