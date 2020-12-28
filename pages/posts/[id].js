import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/Date'
import utilStyles from '../../scripts/dynamicContent.scss'
import Carousel from '../../components/carousel'
import idCss from './id.scss'
import InstagramEmbed from 'react-instagram-embed';
import ArticleCards from "../../components/ArticleCard"

export default function Post({ postData }) {
  return (<Layout>
    <Head>
      <title>{postData.title}</title>
      <meta name="description" content={postData.title}></meta>
    </Head>
    <div className="row">
      <div className="col-md-12">
        <article>
          <div className="ContTitle">
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div className="cont">
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

              {/* manage cards */}
              {postData.postType == 1 ?
                <div>
                  <div className="row">
                    <div className="col">
                      <ArticleCards
                        img={postData.img1}
                        title={postData.title1}
                        resume={postData.card1}
                        imgAlt={postData.title}
                      >
                      </ArticleCards>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                      <ArticleCards
                        img={postData.img2}
                        title={postData.title2}
                        resume={postData.card2}
                        imgAlt={postData.title}
                      >
                      </ArticleCards>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col" >
                      <ArticleCards
                        img={postData.img3}
                        title={postData.title3}
                        resume={postData.card3}
                        imgAlt={postData.title}
                      >
                      </ArticleCards>
                    </div>
                    <div className="col"></div>
                    <div className="col">
                      <ArticleCards
                        img={postData.img4}
                        title={postData.title4}
                        resume={postData.card4}
                        imgAlt={postData.title}
                      >
                      </ArticleCards>
                    </div>
                  </div>
                </div>
                : null
              }

              <hr/>
              {postData.insta ?
                <InstagramEmbed
                  url={postData.insta}
                  clientAccessToken='1068148143638626|a9b9853d87fb33cdc31ac2ad0426818d'
                  maxWidth={320}
                  hideCaption={false}
                  containerTagName='div'
                  protocol=''
                  injectScript
                  onLoading={() => { }}
                  onSuccess={() => { }}
                  onAfterRender={() => { }}
                  onFailure={() => { }}
                /> : null
              }
            </div>
          </div>
        </article>
      </div>
    </div>
  </Layout>)
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}