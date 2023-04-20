import { FC } from "react";
import SetIconTime from "./SetIconTime.component";

interface itemTime {
  data: {
    title: string;
    date: string;
    description: string;
    id: number;
  };
}

const ItemTime: FC<itemTime> = ({ data }) => {
  return (
    <li className="mb-10 ml-8">
      <SetIconTime />
      <h3 className="mb-1 text-lg font-semibold text-white">{data.title}</h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
        {data.date}
      </time>
      <p className="text-base font-normal text-gray-300">{data.description}</p>
    </li>
  );
};

export default ItemTime;
