import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/mern-blog-assets-main/blog22.jpg'
import '../css/postdetail.css'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail_buttons">
            <Link to={`/post/werwer/edit`} className='btn sm primary'>Edit</Link>
            <Link to={`/post/werwer/delete`} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio fugiat rem laboriosam quidem, 
          corporis possimus a nostrum! Sit voluptatibus eaque, quaerat atque nostrum nulla laudantium, 
          voluptatem illum architecto harum aperiam repellendus dolore optio numquam, debitis mollitia ipsum ipsam? Cum.
        </p>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab recusandae incidunt molestias rem tempora? 
        Dignissimos dolorum natus odio nisi. Ullam dolore quia labore exercitationem odio placeat eligendi neque
        repellendus ipsam nesciunt explicabo quaerat earum veritatis sint molestiae ea rerum magni voluptate dolor
        reiciendis, pariatur beatae aliquam. Tempora amet ullam tempore modi labore at et ipsam!
        </p>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab recusandae incidunt molestias rem tempora? 
        Dignissimos dolorum natus odio nisi. Ullam dolore quia labore exercitationem odio placeat eligendi neque
        repellendus ipsam nesciunt explicabo quaerat earum veritatis sint molestiae ea rerum magni voluptate dolor
        reiciendis, pariatur beatae aliquam. Tempora amet ullam tempore modi labore at et ipsam! Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Autem odit nulla ducimus, quae rem at culpa ullam! Voluptatum autem beatae natus amet, 
        eveniet eius quisquam quia inventore ducimus est animi fugiat pariatur tempora sunt, nostrum molestiae molestias
         voluptatem fuga voluptatibus nulla labore! Itaque, aperiam! Saepe harum quidem dignissimos natus beatae. Voluptatum rem accusamus 
         eius quo et hic nihil! Ad minus repudiandae autem accusamus incidunt error officia labore eveniet! Porro animi voluptatem dolores 
         dicta quibusdam quas tempore? Nam quis at maiores, a saepe exercitationem, similique facere error porro eligendi perferendis laboriosam 
         veritatis neque delectus velit nesciunt cum fuga. Numquam, repudiandae, nihil quas amet dolor debitis excepturi distinctio, 
         quam quisquam quos possimus libero.
        </p>

      </div>
    </section>
  )
}

export default PostDetail
