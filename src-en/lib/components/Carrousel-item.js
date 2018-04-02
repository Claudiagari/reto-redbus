import React from 'react'

const Item = ({url, name, onClick})=>(
  <li onClick={onClick}>
    <img src={url} alt={name}/>
  </li>
)

export default Item