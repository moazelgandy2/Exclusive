import React from "react";

function SectionHead({ children, title: title }) {
  return (
    <div className="my-16 overflow-hidden">
      <h3 className="title left-8 top-1  text-[#DB4444] font-semibold relative">{title}</h3>
      {children}
    </div>
  );
}

export default SectionHead;
