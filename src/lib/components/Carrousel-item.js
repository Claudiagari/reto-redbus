import React from 'react'

const Item = ({url, name, onClick,style})=>(
  <li onClick={onClick}
      
  >
    <img className="img-agents" src={url} alt={name}/>
  </li>
)

export default Item