import { Link } from "react-router-dom"
import "./menu.scss"
import { menu } from "../../data"

export const Menu = () => {
  return (
    <div className="menu">
      {menu.map(item => (
        <div className="item">
        <span className="title" key={item.id}>{item.title}</span>
        {item.listItems.map( listItem => (
          <Link to="/" className="listItem" key={listItem.id}>
          <img src={listItem.icon} alt=""/>
          <span className="listItemTitle">{listItem.title}</span>
        </Link>
        ) )}
      </div>
      ))}
    </div>
  )
}
