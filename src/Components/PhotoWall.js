import React from 'react';
import Photo from './Photo'
import {Link} from 'react-router-dom'
// import PropTypes from 'prop-types';

function PhotoWall(props) {
  return(
  <div>
  <Link className="addIcon" to="/AddPhoto"> </Link>
  { /*<button onClick={props.onNavigate} className = "addIcon">  </button>*/}
  <div className="photo-grid">
    {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />)}
  </div>
  </div>)
}

// PhotoWall.propTypes = {
//   posts: PropTypes.array.isRequire,
//   onRemovePhoto: PropTypes.func.isRequired
// }



export default PhotoWall