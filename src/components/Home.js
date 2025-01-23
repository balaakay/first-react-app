import { Link } from 'react-router-dom'

/*
  * TODO
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
  <div className="flex flex-col w-full justify-center items-center bg-blue-100">
    <div className="p-12"></div>
    <h1 className="block p-5 items-center bg-green-100">
      Balaakay's Office
    </h1>
    <h2 className="block pt-12 pb-8 p-3 bg-red-100">
      Welcome, feel free to look around. Don't unplug anything and don't touch the keyboard
    </h2>
    <div className="flex flex-row">
      <BlogImport/>
      <TimeoutButton />
    </div>
  </div>
)


export function TimeoutButton() {
  return (
    <Link to="/timeout" className="p-5 border-2 rounded-xl border-black text-center ">
      Do not push this button
    </Link>
  )
}


export function BlogImport() {
  const blogPosts = {
    "text1": "Hi, I'm Blake Dallas. Programmer and baseball fanatic.",
    "text2": "Baseball statistics are basically a part of me now. I have studied" +
    " them for years and years.",
    "text3": "Is react a good thing or a bad thing? I don't know. But I do know " +
    "I used it to create this website/app",
  }

  return (
    <div className="p-10 bg-green-100 text-center grid-cols-1 gap-2 col-auto">
      <p className='font-bold'>
        links to blog posts
      </p>
      <div className="w-80 p-8 border rounded-xl border-black text-center">{blogPosts.text1}</div>
      <div className="w-80 p-8 border rounded-xl border-black text-center">{blogPosts.text2}</div>
      <div className="w-80 p-8 border rounded-xl border-black text-center">{blogPosts.text3}</div>
    </div>
  )
}




export default Home
