"use client";

import { useCallback, useState } from "react";
import MarketTable from "./MarketTable";
import { marketData } from "@/dummyData/marketData";
import Tab from "./Tab";

export default function TabAndMarketTable() {
  const [data, setData] = useState(marketData);

  const labelList = ["Favorit", "IDR", "USD", "BNB", "BTC", "ALTS"];
  const [selected, setSelected] = useState<string>("IDR");

  const handleTabChange = useCallback(
    (selectedTab: string) => setSelected(selectedTab),
    []
  );

  const handleFavorite = (id: number) =>
    setData(
      data.map((item, i) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );

  return (
    <section>
      <Tab
        labelList={labelList}
        selected={selected}
        onSelect={handleTabChange}
      />
      <MarketTable
        dataList={
          selected !== "Favorit"
            ? data.filter((d) => d.tab === selected)
            : data.filter((d) => d.favorite === true)
        }
        onStarClick={handleFavorite}
      />
    </section>
  );
}
