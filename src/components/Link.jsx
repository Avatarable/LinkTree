import React from 'react'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min'
import './Link.css'

function Link({id, title, tip, url}) {
  const tooltipTriggerList = [0].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))   
  return (
    <a href={url} className="link btn" id={id} 
        data-bs-toggle="tooltip" data-bs-placement="bottom" 
        data-bs-title={tip}
        >
        {title}
    </a>
  )
}

export default Link