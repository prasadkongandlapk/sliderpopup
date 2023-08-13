import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <Slider>
      {moviesList.map(each => {
        if (each.category === 'ACTION') {
          return <MovieItem actionInfo={each} key={each.id} />
        }
        return null
      })}
    </Slider>
  )
}
export default MoviesSlider
