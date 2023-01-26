import Hero from "../components/Hero";
import Head from 'next/head';
import Layout from "../components/Layout";
import Beneficios from "../components/Beneficios";
import Vantagens from "../components/Vantagens";
import Opcoes from "../components/Opcoes";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Beneficios/>
      <Vantagens/>
      <Opcoes/>
    </Layout>
  );
}
