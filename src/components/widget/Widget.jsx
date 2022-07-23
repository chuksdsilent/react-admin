import React from 'react'
import "./Widget.scss"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Widgets = ({ type }) => {
  let data;

  const amount = 345;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all Users",
        icon: (<PersonIcon class="icon" fontSize='small' style={{ backgroundColor: "rgba(255,0,0,.2)" }} />)
      }
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See all Users",
        icon: (<AddShoppingCartIcon class="icon" fontSize='small' style={{ backgroundColor: "#6433d833" }} />)
      }
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View all Earnings",
        icon: (<MonetizationOnIcon class="icon" fontSize='small' style={{ backgroundColor: "#62941267" }} />)
      }
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (<AccountBalanceIcon class="icon" fontSize='small' style={{ backgroundColor: "#d634a033" }} />)
      }
      break;
    default:
      console.log("nothing...")
      break;

  }
  return (
    <div className='widget'>
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">{data.isMoney && "$"}{amount}</div>
        <span className="link">See All Users</span>
      </div>
      <div className="right">
        <div className="percentage positive"><ArrowUpwardIcon />{diff}%</div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widgets