const MovieItem = props => {
  const {actionInfo} = props
  const {thumbnailUrl} = actionInfo
  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  )
}

export default MovieItem
