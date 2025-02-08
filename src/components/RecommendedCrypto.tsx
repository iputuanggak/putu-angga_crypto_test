import { formatDigit, formatDigitWithAbbr } from "@/lib/formatDigit";
import LineChart from "./LineChart";
import { recommendedCryptoData } from "@/dummyData/recommendedCryptoData";

export default function RecommendedCrypto() {
  const recommendedCrypto = recommendedCryptoData;

  return (
    <div className="w-full overflow-x-auto">
      <div className="grid min-w-[1000px] grid-cols-4 gap-4">
        {recommendedCrypto.map((rc, i) => (
          <RecommendedCard
            pair={rc.pair}
            price={rc.price}
            valueChanges={rc.valueChanges}
            volume={rc.volume}
            dataForGraph={rc.dataForGraph}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

type DashboardCardProps = {
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
    <div className="cursor-pointer rounded-lg bg-[#121b2e] p-4 text-sm hover:bg-[#121b2e]/70">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="text-sm">{pair}</p>
        <LineChart
          data={dataForGraph}
          className="h-12 w-full md:h-24 md:w-1/2"
        />
      </div>
      <p className="text-xl font-bold">Rp {formatDigit(price)}</p>
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
