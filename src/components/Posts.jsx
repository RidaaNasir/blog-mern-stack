import React, { useState } from 'react'


import Thumbnail1 from '../images/mern-blog-assets-main/blog1.jpg'
import Thumbnail2 from '../images/mern-blog-assets-main/blog2.jpg'
import Thumbnail3 from '../images/mern-blog-assets-main/blog3.jpg'
import Thumbnail4 from '../images/mern-blog-assets-main/blog4.jpg'

import PostItem from './PostItem'


const DUMMY_POSTS=[

    {
        id:'1',
        thumbnail:Thumbnail1,
        category: "education",
        title: "This is the title for the very first post on this blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio molestias eveniet odit ad dolor temporibus consequatur minus perferendis unde fugit provident velit animi sit, nam non repellendus praesentium dolorum?",
        authorID: 3
    }
    ,
    {
        id:'2',
        thumbnail:Thumbnail2,
        category: "science",
        title: "This is the title for the very second post on this blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio molestias eveniet odit ad dolor temporibus consequatur minus perferendis unde fugit provident velit animi sit, nam non repellendus praesentium dolorum?",
        authorID: 1
    }
    ,
    {
        id:'3',
        thumbnail:Thumbnail3,
        category: "weather",
        title: "This is the title for the very third post on this blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio molestias eveniet odit ad dolor temporibus consequatur minus perferendis unde fugit provident velit animi sit, nam non repellendus praesentium dolorum?",
        authorID: 4
    }
    ,
    {
        id:'4',
        thumbnail:Thumbnail4,
        category: "film",
        title: "This is the title for the very fourth post on this blog",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio molestias eveniet odit ad dolor temporibus consequatur minus perferendis unde fugit provident velit animi sit, nam non repellendus praesentium dolorum?",
        authorID: 3
    }


]

const Posts = () => {

    const[posts,setPosts] = useState(DUMMY_POSTS)
  return (
    <section className='posts'>
        {
        posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title}
            description={desc} authorID={authorID} />)
}
    </section>
  )
}

export default Posts
