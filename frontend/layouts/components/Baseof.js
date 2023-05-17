import { useRouter } from "next/router";
import Footer from "../Footer";
import Header from "../Header";
import config from "/config/config.json";
import Head from "next/head";
import { plainify } from "@/lib/utils/textConverter";

const Base = ({ title, meta_title, description, image, noindex, canonical, children }) => {
 const { meta_image, meta_author, meta_description } = config.metadata;
 const { base_url } = config.site;
 const router = useRouter();
 return (
  <div className="flex flex-col min-h-screen">
   <Head>
    {/* title */}
    <title>{plainify(meta_title ? meta_title : title ? title : config.site.title)}</title>

    {/* canonical url */}
    {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

    {/* noindex robots */}
    {noindex && <meta name="robots" content="noindex,nofollow" />}

    {/* meta-description */}
    <meta name="description" content={plainify(description ? description : meta_description)} />

    {/* author from config.json */}
    <meta name="author" content={meta_author} />

    {/* og-title */}
    <meta property="og:title" content={plainify(meta_title ? meta_title : title ? title : config.site.title)} />

    {/* og-description */}
    <meta property="og:description" content={plainify(description ? description : meta_description)} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`${base_url}/${router.asPath.replace("/", "")}`} />

    {/* twitter-title */}
    <meta name="twitter:title" content={plainify(meta_title ? meta_title : title ? title : config.site.title)} />

    {/* twitter-description */}
    <meta name="twitter:description" content={plainify(description ? description : meta_description)} />

    {/* og-image */}
    <meta property="og:image" content={`${base_url}${image ? image : meta_image}`} />

    {/* twitter-image */}
    <meta name="twitter:image" content={`${base_url}${image ? image : meta_image}`} />
    <meta name="twitter:card" content="summary_large_image" />
   </Head>
   <Header />
   <main className="flex-grow">{children}</main>
   <Footer />
  </div>
 );
};

export default Base;
