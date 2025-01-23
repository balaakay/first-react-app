
/*
  * TODO
  * - I have this 'dont touch the keyboard' line, maybe I can add a small picture
  *   of a keyboard somewhere on the side of the page and if they click it something
  *   interesting happens. Could be something like a 'timeout corner' or something
  *   else interesting.
  * - dynamically resise the padding div at the top of this page to handle different
  *   size screens
  * - 
  * - 
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
    <div className="float-left p-10">
      links to blog posts
      <div className="float-left p-8">blog post 1</div>
      <div className="float-left p-8">blog post 2</div>
      <div className="float-left p-8">blog post 3</div>
    </div>
    
  </div>
)

export default Home
