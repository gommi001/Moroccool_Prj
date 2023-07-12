import "./sidebar.css"
import WidgetsIcon from '@mui/icons-material/Widgets';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import LocalActivityIcon from '@mui/icons-material/LocalActivity';



const Sidebar = () => {

  return (
    <div className="sidebar">
      
        <div className="top">
          <Link to="/" style={{textDecoration:"none"}} >
          <span className="logo">Moroccool</span>
          </Link>
        </div>
        <hr/>
        <div className="center">
          <p className="title">Main Activity</p>
          <ul>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <span className="icon"><WidgetsIcon/></span>
              <span>Dashboard</span>
            </li>
          </Link>
            <p className="title">Services</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li>
              <span className="icon"><PersonOutlineIcon/></span>
              <span>Users</span>
            </li>
            </Link>
            <Link to="/cafes" style={{textDecoration:"none"}}>
            <li>
              <span className="icon"><InventoryIcon/></span>
              <span>Cafes</span>
            </li>
            </Link>
            <Link to="/hotels" style={{textDecoration:"none"}}>
            <li>
              <span className="icon"><CreditScoreIcon/></span>
              <span>Hotels</span>
            </li>
            </Link>
            <Link to="/events" style={{textDecoration:"none"}} >
            <li>
              <span className="icon"><LocalActivityIcon/></span>
              <span>Events</span>
            </li>
            </Link>
            <p className="title">User</p>
            <li>
              <span className="icon"><AccountBoxOutlinedIcon/></span>
              <span>Your Profile</span>
            </li>
            <li>
              <span className="icon"><NotificationsNoneIcon/></span>
              <span>Notifications</span>
            </li>
            <li>
              <span className="icon"><SettingsApplicationsOutlinedIcon/></span>
              <span>Settings</span>
            </li>
            <li>
              <span className="icon"><LogoutOutlinedIcon/></span>
              <span>LogOut</span>
            </li>
          </ul>
        </div>
        <div className="bottom2">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar