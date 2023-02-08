import Hero from "../components/Hero";
import Head from 'next/head';
import Layout from "../components/Layout";
import Beneficios from "../components/Beneficios";
import Vantagens from "../components/Vantagens";
import Opcoes from "../components/Opcoes";
import Facilidades from "../components/Facilidades";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Beneficios/>
      <Vantagens/>
      <Opcoes/>
      <Facilidades/>
      <Footer/>
    </Layout>
  );
}
