import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Hillary Ombima - Full Stack Developer & Blockchain Engineer",
  description = "Full stack developer specializing in React, Node.js, Go, Rust, and blockchain technologies. Building scalable web applications and smart contracts.",
  image = "/images/og-image.png",
  url = "https://ombima-hillary.vercel.app",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="keywords" content="full stack developer, blockchain developer, React, Node.js, Go, Rust, Solidity, Web3, smart contracts" />
      <meta name="author" content="Hillary Ombima" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
