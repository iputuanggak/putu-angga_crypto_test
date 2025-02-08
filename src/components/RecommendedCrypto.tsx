import { formatDigit, formatDigitWithAbbr } from "@/lib/formatDigit";
import LineChart from "./LineChart";
import { recommendedCryptoData } from "@/dummyData/recommendedCryptoData";

export default function RecommendedCrypto() {
  const recommendedCrypto = recommendedCryptoData;

  return (
    <div className="grid grid-cols-4 gap-4">
      {recommendedCrypto.map((rc, i) => (
        <RecommendedCard
          id={0}
          pair={rc.pair}
          price={rc.price}
          valueChanges={rc.valueChanges}
          volume={rc.volume}
          dataForGraph={rc.dataForGraph}
        />
      ))}
    </div>
  );
}

type DashboardCardProps = {
  id: number;
  pair: string;
  price: number;
  valueChanges: string;
  volume: number;
  dataForGraph: number[];
};

function RecommendedCard({
  pair,
  price,
  valueChanges,
  volume,
  dataForGraph,
}: DashboardCardProps) {
  return (
    <div className="bg-[#121b2e] p-4 rounded-lg text-sm">
      <div className="flex justify-between">
        <p className="text-sm">{pair}</p>
        <LineChart data={dataForGraph} className="w-1/2 h-24" />
      </div>
      <p className="font-bold text-xl">Rp {formatDigit(price)}</p>
      <div className="flex justify-between">
        <p
          className={
            valueChanges[0] === "+"
              ? "text-[#6EDC86]"
              : valueChanges[0] === "-"
              ? "text-[#FF3B3B]"
              : ""
          }
        >
          {valueChanges}
        </p>
        <p>volume: {formatDigitWithAbbr(volume)} IDR</p>
      </div>
    </div>
  );
}
