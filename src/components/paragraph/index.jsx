import React from "react";

const Paragraph = ({ title, children }) => {
  return (
    <article>
      {title && (
        <h2 className="font-dancing text-2xl font-medium mb-2">{title}</h2>
      )}
      <p className="text-justify">{children}</p>
    </article>
  );
};

export default Paragraph;
