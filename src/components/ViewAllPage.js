import { React, useEffect } from "react";
import "./ViewAllPage.css";

import Tasks from "../apis/Tasks";
import ViewAllCard from "./UI/viewall/ViewAllCard";

function ViewAllPage() {
  // const fetchData = async () => {
  //   try {
  //     const response = await Tasks.get("/api/tasks/");
  //     console.log("Response:", response);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // fetchData();

  //attempt two
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await Tasks.get("/");
  //       console.log(response);
  //     } catch (error) {
  //       // Handle errors if needed
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  //attempt one
  // useEffect(async () => {
  //   // eslint-disable-next-line
  //   try {
  //     const response = await Tasks.get("/");
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  return (
    <div className="ViewAllPage">
      <div className="ViewAllPage_Container">
        <h1>hello from view all page</h1>
        {/* map over this to show all the things, send data to view all card */}
        <ViewAllCard />
        <ViewAllCard />
      </div>
    </div>
  );
}

export default ViewAllPage;
