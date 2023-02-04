import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoader: true,
  }

  componentDidMount() {
    this.blogList()
  }

  blogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updateDataFormat = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsList: updateDataFormat, isLoader: false})
  }

  render() {
    const {blogsList, isLoader} = this.state
    return (
      <div className="list-container">
        <ul>
          {isLoader ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            blogsList.map(eachItem => (
              <BlogItem blogsList={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default BlogList
