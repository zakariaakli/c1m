import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Date'
import utilStyles from '../../scripts/dynamicContent.scss'
import Carousel from '../../components/carousel'
import idCss from './id.scss'


export default function Post({ postData }) {
  return (<Layout>
     <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.title}></meta>
      </Head>
      <div className="row">
        <div className="col-md-12">
            <Carousel/>
        </div>
        <div className="col-md-12">
            <article>
              <div className="ContTitle">
                  <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                  <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                  </div>
                  <div className="cont">
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                  </div>
              </div>
          </article>
        </div>
      </div>
  </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds(); 
  console.log('-------------------------------ZAK')
  console.log(paths);
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