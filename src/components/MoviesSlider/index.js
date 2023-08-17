import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <div>
      <Slider>
        <ul className="videos-bg">
          {moviesList.map(each => {
            if (each.categoryId === 'ACTION') {
              return <MovieItem actionInfo={each} key={each.id} />
            }
            return null
          })}
        </ul>
      </Slider>
      <h1>Comedy</h1>
      <Slider>
        <ul className="videos-bg">
          {moviesList.map(each => {
            if (each.categoryId === 'COMEDY') {
              return <MovieItem actionInfo={each} key={each.id} />
            }
            return null
          })}
        </ul>
      </Slider>
    </div>
  )
}
export default MoviesSlider
