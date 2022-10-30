import React from 'react'
import './Links.css'

function Links() {
  return (
    <div className="links">
        <a href="https://twitter.com/Avatar_Able" className="link btn" id="btn__zuri">Twitter Link</a>
        <a href="https://training.zuri.team/" className="link btn" id="btn__zuri">Zuri Team</a>
        <a href="https://books.zuri.team/" className="link btn" id="books">Zuri Books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Avatarable" className="link btn" id="book__python">Python Books</a>
        <a href="https://background.zuri.team/" className="link btn" id="pitch">Background Check for Coders</a>
        <a href="https://books.zuri.team/design-rules" className="link btn" id="book__design">Design Books</a>
    </div>
  )
}

export default Links