import PropTypes from 'prop-types'

/*
  * TODO 
  * - Decide if an aside is what we want
  * - Style the page to be more centered
  * - Convert this to typescript. Will need an interface to pass blogPost props
  *   number variable
  *
  */


export default function Blog() {
  return (
    <div className="bg-gray-300">
      <div className="content float-left">
        This is pretty cool for a blog
        <BlogLoader className=""/>
      </div>
      <aside className="float-right">
        <h3>Archives</h3>
        <p>This is where all my past blog posts could go on my landing page</p>
      </aside>
    </div>
  )
}




function BlogLoader() {

  function BlogPost(props) {
    return (
      <div className="p-5 bg-gray-100">
      <h2>Blog post #{props.number}</h2>
      <p>This is the beginning text of the blog post #{props.number}</p>
      </div>
    )
  }

  BlogPost.propTypes = {
    number: PropTypes.number.isRequired
  }

  return (
    <div>
      <BlogPost number={1}/>
      <BlogPost number={2}/>
      <BlogPost number={3}/>
      <BlogPost number={4}/>
    </div>
  )
}


