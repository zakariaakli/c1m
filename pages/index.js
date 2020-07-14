// pages/index.js
import Link from "next/link";

import Layout from "../components/Layout";
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../scripts/dynamicContent.scss'

export default function Index({allPostsData }){
  return(
    <Layout>
    <br />
    <Link href="/explore">
      <a> Welcome to c-1m Blog! Start Exploring Now</a>
    </Link>
    <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
    </ul>
  </Layout>
  )
  
} 
  
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}