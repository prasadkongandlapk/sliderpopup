import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {actionInfo} = props
  const {thumbnailUrl, videoUrl} = actionInfo
  return (
    <li>
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              <img className="video-img" src={thumbnailUrl} alt="thumbnail" />
            </button>
          }
        >
          {close => (
            <>
              <div>
                <ReactPlayer url={videoUrl} />
              </div>
              <button
                data-testid="closeButton"
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <IoMdClose />a
              </button>
            </>
          )}
        </Popup>
      </div>
    </li>
  )
}

export default MovieItem
