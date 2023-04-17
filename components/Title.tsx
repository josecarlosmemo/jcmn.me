import React from "react";

type Props = {
  title: string;
};

function Title({ title }: Props) {
  return (
    <h3 className="absolute top-20 uppercase md:tracking-[20px] text-gray-500 text-xl tracking-[10px] text-center m-auto px-10 md:px-0">
      {title}
    </h3>
  );
}

export default Title;
