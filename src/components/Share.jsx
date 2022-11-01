import React from 'react'
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min'
import './Share.css'

function Share() {
  const tooltipTriggerList = [0].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))   
  return (
    <a href="/" className="share d-flex" data-bs-toggle="tooltip" data-bs-placement="left" 
    data-bs-title="Share Link">
        <span className='icon__1'><iconify-icon icon="bi:three-dots" flip="horizontal"></iconify-icon></span>
        <span className='icon__2'><iconify-icon icon="bx:share" flip="horizontal"></iconify-icon></span>
    </a>
  )
}

export default Share