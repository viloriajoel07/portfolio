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
      <Link
        href={data.path}
        className={`text-gray-300 hover:text-gray-200 ${
          active &&
          "font-bold !text-white drop-shadow-2xl shadow-green-600 overflow-hidden"
        } cursor-pointer`}
      >
        <p className="overflow-y-hidden">{data.title}</p>
      </Link>
    </li>
  );
};

export default ULink;
