import React from 'react'

const Item = ({url, name, onClick})=>(
  <li className="text-center" onClick={onClick}>
    <img src={url} alt={name}/>
  </li>
)

export default Item