import { useRouter } from "next/router";
import Footer from "../Footer";
import Header from "../Header";
import config from "/config/config.json";
import Head from "next/head";
import { plainify } from "@/lib/utils/textConverter";

const Base = ({ children }) => {
 const router = useRouter();
 return (
  <div className="flex flex-col min-h-screen">
   <Header />
   <main className="flex-grow">{children}</main>
   <Footer />
  </div>
 );
};

export default Base;
