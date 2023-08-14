import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  return (
    <Slider>
      <ul className="videos-bg">
        {moviesList.map(each => {
          if (each.category === 'ACTION') {
            return <MovieItem actionInfo={each} key={each.id} />
          }
          return <MovieItem actionInfo={each} key={each.id} />
        })}
      </ul>
    </Slider>
  )
}
export default MoviesSlider
