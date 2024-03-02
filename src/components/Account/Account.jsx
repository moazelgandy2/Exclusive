import React from "react";
import SectionHead from "../SectionHead/SectionHead";

function Account() {
  return (
    <>
      <SectionHead title={"My Account"}>
        <section className="px-12 py-12">
          <aside>
            <h2>Manage account</h2>
          </aside>
        </section>
      </SectionHead>
    </>
  );
}

export default Account;
