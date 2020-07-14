import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../scripts/dynamicContent.scss'
import Carousel from '../../components/carousel'


export default function Post({ postData }) {
  return (<Layout>
     <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="row">
        <div className="col-md-12">
            <Carousel/>
        </div>
        <div className="col-md-12">
            <article>
            <div className="cont">
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                  <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
          </article>
        </div>
      </div>
  </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds(); 
 // console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id); 
  console.log(postData);
  return {
    props: {
      postData
    }
  }
}