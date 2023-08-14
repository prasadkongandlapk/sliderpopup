import './index.css'

const MovieItem = props => {
  const {actionInfo} = props
  const {thumbnailUrl} = actionInfo
  return (
    <li>
      <img className="video-img" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}

export default MovieItem
