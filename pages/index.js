// pages/index.js
import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

export default function Index(){
  return(
       
    <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to c-1m Blog! Start Exploring Now</a>
    </Link>
  </Layout>
  )
  
} 
  
