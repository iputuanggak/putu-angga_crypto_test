import RecommendedCrypto from "@/components/RecommendedCrypto";
import TabAndMarketTable from "@/components/TabAndMarketTable";

export default function Home() {
  return (
    <div className="mt-6 space-y-6">
      <section>
        <h3 className="text-4xl font-bold">Pasar</h3>
        <p>Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia</p>
      </section>
      <RecommendedCrypto />
      <TabAndMarketTable />
    </div>
  );
}
