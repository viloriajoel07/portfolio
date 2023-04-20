import React from "react";
import ItemTime from "./ItemTime.component";

const listTimeline = [
  {
    title: "Movilbox SAS",
    date: "November 7th, 2022",
    description:
      "Company dedicated to the management of software for multiple international telephone companies, offering services such as sales management or sales processes of the companies",
    id: 1,
  },
  {
    title: "Freelance Developer",
    date: "May 7th, 2022",
    description:
      "During this time I worked in partnership with a friend, where we developed two main applications, one for pool reservations, and another for personal finance management.",
    id: 2,
  },
  {
    title: "Seven Ware SAS",
    date: "January 1th, 2022",
    description:
      "Company dedicated to the management of software for health systems IPS, my main objective was to migrate all the software to the web",
    id: 3,
  },
];

const Timeline = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      {listTimeline.map((dataTime) => (
        <ItemTime key={dataTime.id} data={dataTime} />
      ))}
    </ol>
  );
};

export default Timeline;
