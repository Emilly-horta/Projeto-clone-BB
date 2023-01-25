import Hero from "../components/Hero";
import Head from 'next/head';
import Layout from "../components/Layout";
import Beneficios from "../components/Beneficios";
import Vantagens from "../components/Vantagens";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Beneficios/>
      <Vantagens/>
    </Layout>
  );
}
