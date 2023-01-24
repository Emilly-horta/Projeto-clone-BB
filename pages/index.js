import Hero from "../components/Hero";
import Head from 'next/head';
import Layout from "../components/Layout";
import Beneficios from "../components/Beneficios";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Beneficios/>
    </Layout>
  );
}
