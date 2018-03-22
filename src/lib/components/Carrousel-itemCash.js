import React from 'react'

const ItemCash = ({url, name, typeEntity, typeEntity2, onClick})=>(
  <li onClick={onClick} className="align-self-center li-carousel ">
    <img src={url} alt={name}/>
    <p className="bold">{typeEntity}</p>
    <p className="bold">{typeEntity2}</p>
  </li>
)

export default ItemCash