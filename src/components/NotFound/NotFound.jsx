import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>NotFound</title>
        <meta name="description" content={`NotFound page`} />
      </Helmet>
      <div className="min-h-[100vh] text-center flex flex-col gap-5 justify-center items-center">
        <h2 className="text-5xl font-bold">404 Not Found</h2>
        <p>You have visited a page that does not exist. You may return to the home page.</p>
        <Link to={"/"} className="p-2 bg-[#DB4444] text-white rounded-sm border-0">
          Back to home page
        </Link>
      </div>
    </>
  );
}

export default NotFound;
