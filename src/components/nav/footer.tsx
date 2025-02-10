import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-card rounded-xl mt-4">
      <div className="mx-auto px-4 py-8">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
