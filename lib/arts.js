import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import content from '../content/content.json';

const postsDirectory = path.join(process.cwd(), 'arts')

// export function getSortedPostsData() {
//     // Get file names under /arts
//     const fileNames = fs.readdirSync(postsDirectory)
//     const allPostsData = fileNames.map(fileName => {
//       // Remove ".md" from file name to get id
//       const id = fileName.replace(/\.md$/, '')

//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, fileName)
//       const fileContents = fs.readFileSync(fullPath, 'utf8')

//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents)
//       // Combine the data with the id
//       return {
//         id,
//         ...matterResult.data
//       }
//     })
//     // Sort arts by date
//     return allPostsData.sort((a, b) => {
//       if (a.date < b.date) {
//         return 1
//       } else {
//         return -1
//       }
//     })
//   }

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }

  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

     // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

// Test partie des cartes
//     const processedContent1 = await remark()
//     .use(html)
//     .process(matterResult.data.hisoire)
// const contentHtml1 = processedContent1.toString()

//     console.log(contentHtml1);

    // Get intagram info if available from json
    const eltWithInstaPost = await content.content.find(elt => elt.insta &&  elt.id == id);
    const insta = eltWithInstaPost ? eltWithInstaPost.insta : null;
    // Get post type 1 : Card
    const eltPostType = await content.content.find(elt => elt.type &&  elt.id == id);
    const postType = eltPostType ? eltPostType.type : null;

    // Combine the data with the id
    return {
      id,
      contentHtml,
      insta,
      postType,
      //contentHtml1,
      ...matterResult.data
    }
  }

  async function filter(arr, callback) {
    const fail = Symbol()
    return (await Promise.all(arr.map(async item => (await callback(item)) ? item : fail))).filter(i=>i!==fail)
  }