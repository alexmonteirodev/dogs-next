import statsGet from "@/actions/stats-get";
// import ContaEstatisticas from "@/components/conta/conta-estatisticas";
import { Metadata } from "next";
import dynamic from "next/dynamic";

//lazy loading, para carregar o grafico if o user abrir a aba de graficos
const ContaEstatisticas = dynamic(
  () => import("@/components/conta/conta-estatisticas"),
  {
    loading: () => <p>Carregando...</p>,
  }
);

export const metadata: Metadata = {
  title: "Estatísticas",
};

const EstatisticasPage = async () => {
  const { data } = await statsGet();
  console.log("data", data);
  if (!data) return;
  return (
    <section>
      <ContaEstatisticas data={data} />
    </section>
  );
};

export default EstatisticasPage;
