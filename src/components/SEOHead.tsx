import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const SEOHead = ({
  title = "Andres Tech | Sistemas PDV e Inteligência Artificial em Santarém PA",
  description = "Empresa de tecnologia em Santarém, Pará. Sistemas de PDV, automação comercial, emissão fiscal e soluções de Inteligência Artificial sob medida para o seu negócio.",
  keywords = "PDV Santarém, sistema de vendas Santarém, automação comercial Pará, NFC-e Santarém, inteligência artificial Pará, tecnologia Santarém PA, sistema para mercado Santarém, chatbot WhatsApp Santarém, automação de processos Santarém",
  canonicalUrl = "https://andrestech.com.br/",
  ogImage = "https://andrestech.com.br/og-image.png",
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
