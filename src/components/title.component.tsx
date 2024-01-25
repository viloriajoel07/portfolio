import React from "react";

const Title = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div>
      <h2 className="text-4xl lg:5xl px-4 font-bold w-full flex justify-center gap-1 text-center text-gradient">
        {title}
      </h2>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default Title;
