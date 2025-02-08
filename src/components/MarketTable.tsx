import { formatDigit, formatDigitWithAbbr } from "@/lib/formatDigit";
import { useEffect } from "react";
import { FaSort, FaStar } from "react-icons/fa6";

type dataType = {
  id: number;
  pair: string;
  lastPriceInCrypto: number;
  lastPriceInIDR: number;
  valueChanges: string;
  highLowValue: number;
  marketCap: number;
  volume: number;
  tab: string;
  favorite: boolean;
};



export default function MarketTable({
  dataList,
  onStarClick,
}: {
  dataList: dataType[];
  onStarClick: (id: number) => void;
}) {
  const header = [
    "Pasangan",
    "Harga Terakhir",
    "Perubahan 24jam",
    "Tertinggi / Terendah 24jam",
    "Kapitalisasi Pasar",
    "Volume 24jam",
  ];

  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {header.map((h, i) => (
            <th key={i}>
              <div className="flex gap-1 items-center">
                {h}{" "}
                <FaSort className="text-white/20 hover:text-white cursor-pointer" />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataList.map((data, i) => (
          <tr key={i} className="hover:bg-slate-800 cursor-pointer">
            <td>
              <div className="flex gap-4 items-center">
                <FaStar
                  className={`${
                    data.favorite
                      ? "text-yellow-500  hover:scale-125"
                      : "text-white hover:text-yellow-500 hover:scale-125"
                  }`}
                  onClick={() => onStarClick(data.id)}
                />
                {data.pair}
              </div>
            </td>
            <td>
              {formatDigit(data.lastPriceInCrypto)}/Rp{" "}
              {formatDigit(data.lastPriceInIDR)}
            </td>
            <td
              className={
                data.valueChanges[0] === "+"
                  ? "text-[#6EDC86]"
                  : data.valueChanges[0] === "-"
                  ? "text-[#FF3B3B]"
                  : ""
              }
            >
              {data.valueChanges}
            </td>
            <td>{formatDigit(data.highLowValue)}</td>
            <td>Rp {formatDigitWithAbbr(data.marketCap)}</td>
            <td>{formatDigitWithAbbr(data.volume)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
