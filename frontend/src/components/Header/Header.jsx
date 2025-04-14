import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons' 

export default function Header(props) {
  let title = props.title;
  if (title?.length > 50) {
    title = title.substring(0, 50);
    title += "...";
  }

  return (
    <>
    <div className="navContainer">
      <p className='navTitle'>{title}</p>

      <div className="navIcons">
        <FontAwesomeIcon icon={faMinus} />
        <FontAwesomeIcon icon={faSquare} />
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
    </>
  )
}
