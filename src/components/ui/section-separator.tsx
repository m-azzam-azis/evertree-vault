import React from "react";

const SectionSeparator = () => {
  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-16 flex justify-center">
      <div className="w-8 h-8">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5L12 19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground/40"
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionSeparator;
