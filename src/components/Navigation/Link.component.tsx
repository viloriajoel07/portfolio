import { FC } from "react";
import Link from "next/link";

interface linkProps {
  data: {
    title: string;
    path: string;
    id: number;
  };
  active: boolean;
}

const ULink: FC<linkProps> = ({ data, active }) => {
  return (
    <li>
      <a
        href={data.path}
        className={`text-gray-300 hover:text-gray-200 cursor-pointer`}
      >
        <p className="overflow-y-hidden !font-light">{data.title}</p>
      </a>
    </li>
  );
};

export default ULink;
