import React, { useState } from 'react'
import "../css/authors.css"




import Avatar1 from '../images/mern-blog-assets-main/avatar1.jpg'
import Avatar2 from '../images/mern-blog-assets-main/avatar2.jpg'
import Avatar3 from '../images/mern-blog-assets-main/avatar3.jpg'
import Avatar4 from '../images/mern-blog-assets-main/avatar4.jpg'
import Avatar5 from '../images/mern-blog-assets-main/avatar5.jpg'
import { Link } from 'react-router-dom'




const authorsData = [
  {id: 1, avatar: Avatar1, name: 'Ridaa Nasir', posts: 3},
  {id: 2, avatar: Avatar2, name: 'Ridaa Nasir', posts: 5},
  {id: 3, avatar: Avatar3, name: 'Ridaa Nasir', posts: 0},
  {id: 4, avatar: Avatar4, name: 'Ridaa Nasir', posts: 2},
  {id: 5, avatar: Avatar5, name: 'Ridaa Nasir', posts: 1}
]


const Authors = () => {

  const[authors, setAuthors] = useState(authorsData)

  return (
    <section className="authors">
      {authors.length > 0? <div className="container authors__container">
         {
          authors.map(({id, avatar, name, posts}) => {
            return <Link key={`posts/users/${id}`} className='author'>
              <div className="author__avatar">
                <img src={avatar} alt={`image of ${name}`} />
              </div>
              <div className="author__info">
                <h4>{name}</h4>
                <p>{posts}</p>
              </div>
            </Link>
          })
         }
      </div> : <h2 className='center'>No User/Authors found</h2>}
    </section>
  )
}

export default Authors
