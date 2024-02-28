import React, { Children } from "react";

function SectionHead({ children, title: title }) {
  return (
    <div className="mt-16 px-14">
      <h3 className="title text-[#DB4444] font-semibold relative">{title}</h3>
      {children}
    </div>
  );
}

export default SectionHead;
