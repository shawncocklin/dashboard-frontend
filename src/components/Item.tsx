import { ReactNode } from 'react'
import { MenuItem } from 'react-pro-sidebar'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  to: string
  icon: ReactNode
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  style: {}
}

export default function Item({
  title,
  to,
  icon,
  selected,
  setSelected,
  style,
}: Props) {
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
