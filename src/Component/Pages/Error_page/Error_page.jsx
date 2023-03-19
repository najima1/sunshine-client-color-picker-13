import React from "react";
import { Link } from "react-router-dom";
import "./errors.css"

const Error_page = () => {
  return (
    <div className="">
      <section className="error_bg flex items-center justify-center h-screen  p-16 ">
        <div className="max-w-md text-center">
          <Link to="/">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Back to homepage
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Error_page;
