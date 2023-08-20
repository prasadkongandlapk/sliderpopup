import Slider from 'react-slick'
import MovieItem from '../MovieItem'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
  }
  const {moviesList} = props
  return (
    <div>
      <h1>Action Movies</h1>
      <ul className="videos-bg">
        <Slider className="slider" {...settings}>
          {moviesList.map(each => {
            if (each.categoryId === 'ACTION') {
              return <MovieItem actionInfo={each} key={each.id} />
            }
            return null
          })}
        </Slider>
      </ul>

      <h1>Comedy Movies</h1>
      <ul className="videos-bg">
        <Slider className="slider" {...settings}>
          {moviesList.map(each => {
            if (each.categoryId === 'COMEDY') {
              return <MovieItem actionInfo={each} key={each.id} />
            }
            return null
          })}
        </Slider>
      </ul>
    </div>
  )
}
export default MoviesSlider
