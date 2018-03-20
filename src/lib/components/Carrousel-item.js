import React from 'react'

const Item = ({url,name})=>(
  <li>
    <img src={url} alt={name}/>
  </li>
)

export default Item