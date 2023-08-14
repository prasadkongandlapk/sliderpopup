import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div className="bg">
      <img
        className="prime-logo"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <div>
        <MoviesSlider moviesList={moviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
