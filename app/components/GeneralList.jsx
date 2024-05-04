import React from "react";
import "./styles/generallist.css";

const detailsList = [
  {
    title: "detail1",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 1</p>
      </details>
    ),
  },
  {
    title: "detail2",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 2</p>
      </details>
    ),
  },
  {
    title: "detail3",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 3</p>
      </details>
    ),
  },
  {
    title: "detail4",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 4</p>
      </details>
    ),
  },
  {
    title: "detail5",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 5</p>
      </details>
    ),
  },
  {
    title: "detail6",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 6</p>
      </details>
    ),
  },
  {
    title: "detail7",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 7</p>
      </details>
    ),
  },
  {
    title: "detail8",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 8</p>
      </details>
    ),
  },
  {
    title: "detail9",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 9</p>
      </details>
    ),
  },
  {
    title: "detail10",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 10</p>
      </details>
    ),
  },
  {
    title: "detail11",
    content: (
      <details className="ps-4">
        <summary>Click to view details</summary>
        <p>Details 11</p>
      </details>
    ),
  },
];
const GeneralList = () => {
  return (
    <div className="flex flex-col bg-[#ebe7e7] w-full h-full rounded-lg p-4">
      <div className="uppercase text-[#4e4e4e] flex flex-row justify-between">
        <p>general</p>
        <div className="cursor-pointer hover:opacity-60">+</div>
      </div>
      <div className="flex flex-col">
        {detailsList.map((item, index) => (
          <details key={index}>
            <summary className="font-semibold">{item.title}</summary>
            {item.content}
          </details>
        ))}
      </div>
    </div>
  );
};

export default GeneralList;
