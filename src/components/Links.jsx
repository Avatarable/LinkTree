import React from 'react'

import Link from './Link'

import './Links.css'

function Links() {
     
  return (
    <div className="links">
        <Link url="https://twitter.com/Avatar_Able" title="Twitter Link" />
        <Link id="btn__zuri" url="https://training.zuri.team/" title="Zuri Team" />
        <Link id="books" url="https://books.zuri.team/" title="Zuri Books" tip="Find books about design and coding" />
        <Link id="book__python" url="https://books.zuri.team/python-for-beginners?ref_id=Avatarable" title="Python Books" tip="Python is easier with these amazing books" />
        <Link id="pitch" url="https://backgroundcheck.zuri.team/" title="Background Check for Coders" tip="Have a peek at your programmer's background" />
        <Link id="book__design" url="https://books.zuri.team/design-rules" title="Design Books" tip="Discover tips and guidelines you need to create professional designs" />
    </div>
  )
}

export default Links