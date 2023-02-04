import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogsList

  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="blogs-list-container">
        <div className="list-image-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />
        </div>
        <div className="description-container">
          <p className="course-name">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="urlandname">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
