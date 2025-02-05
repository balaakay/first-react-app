import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

/*
  * TODO
  * - The blog posts are coming from data that is created and components that are
  *   created in this document. I should create the BlogPost component in Blog.jsx
  *   and reuse it here, maybe with different stylings or something like that.
  *
  * - Move the 'Don't push' button over to the right somewhere and size accordingly.
  *   I want it to be a small picture of a split keyboard eventually.
  *
  * - make this page dynamic. If logged in, use account preferences to parse out
  *   the correct blogs to show on the home screen based on interest. If the user
  *   is not logged in, show them everything and have a note at the top talking
  *   about setting user preferences to filter blog post content by topic.
  *
  * - dynamically resise the padding div at the top of this page to handle different
  *   size screens
  *
  * - create links to the blog posts that get generated on this page
  * - The 'do not push' button needs to be small and go somewhere in the upper 
  *   right. The button will also be completely replaced by a drawing of a keyboard
  *
  * DONE:
  * 
  * - I have this 'dont touch the keyboard' line, maybe I can add a small picture
  *   of a keyboard somewhere on the side of the page and if they click it something
  *   interesting happens. Could be something like a 'timeout corner' or something
  *   else interesting.
  */





const Home = () => (
  <div className="flex flex-col w-full justify-evenly items-center bg-blue-100">
    <div className="p-3"></div>
    <TimeoutButton />
    <h2 className="block pt-12 pb-8 p-3 bg-red-100 text-xl sm:text-lg">
      {'Welcome, feel free to look around. Don\'t unplug anything and don\'t touch the keyboard'}
    </h2>
    <div className="flex flex-row">
      <BlogImport/>
    </div>
  </div>
)


export function TimeoutButton() {
  return (
    <Link to="/timeout" className="p-3 sm:p-3 md:p-5 border-1 sm:border-1 md:border-2 rounded-xl border-black text-center ">
      {'Do not push this button'}
    </Link>
  )
}


export function BlogImport() {
  const blogPosts = {
    texts: [
      {id: 1, title: "Introduction", content: "Hi, I'm Blake Dallas. Programmer and baseball fanatic."},
      {id:2, title: "Baseball", content: "Baseball statistics are basically a part of me now. I have studied" +
        " them for years and years."},
      {id:3, title: "React", content: "Is react a good thing or a bad thing? I don't know. But I do know " +
        "I used it to create this website/app"}
    ],
  }

  return (
    <div className="px-10 pb-10 pt-4 bg-green-100 text-center">
      <p className='font-bold pb-4'>
        {'links to blog posts'}
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {blogPosts.texts.map((text) => (
        <BlogPost key={text.id} title={text.title} content={text.content} />
      ))}
      <NewBlogPost />
      </div>
    </div>
  )
}


const BlogPost = ({ title, content }) => {

  console.log('Title: ', title)
  console.log('Content: ', content)

  return <button onClick={() => {
        return (alert("this is an alert"))
      }
      } className="w-80 p-8 border rounded-xl border-black text-center cursor-pointer">
      <h1 className='text-xl font-bold pb-4'>{title}</h1>
      <p>{content}</p>
    </button>
}


// This is for making sure that the content that is passed to a blog post is a
// string and exists. I will have to learn more about when to create these propTypes
BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}


const NewBlogPost = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/test')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return <button onClick={() => {
        return (alert("this is an alert"))
      }
      } className="w-80 p-8 border rounded-xl border-black text-center cursor-pointer">
      <h1 className='text-xl font-bold pb-4'>{data?.message}</h1>
    </button>
}



export default Home
