import React from 'react'

import { MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

export default function Item({
  title,
  to,
  icon,
  selected,
  setSelected,
  style,
}) {
  return (
    <MenuItem
      routerLink={<Link to={to} />}
      rootStyles={{ ...style, backgroundColor: 'transparent' }}
      icon={icon}
      active={selected === title}
      onClick={() => setSelected(title)}
    >
      <p>{title}</p>
    </MenuItem>
  )
}
