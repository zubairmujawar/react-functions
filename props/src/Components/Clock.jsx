import React from "react";
import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setdate] = useState(new Date());

  // useEffect(() => {
  //   let dateId = setInterval(() => {
  //     setdate(new Date());
  //   }, 1000);
  //   return () => clearInterval(dateId);
  // }, []);

  useEffect(()=>{
    let dataId = setInterval(() => {
      setdate(new Date())
    }, 1000);
    return ()=> clearInterval(dataId)
  },[])
  return (
    <>
      Date {date.toLocaleDateString()}
      <br />
      Time {date.toLocaleTimeString()}
    </>
  );
};

export default Clock;
