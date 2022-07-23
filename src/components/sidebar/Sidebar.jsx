import React, { useContext } from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AccountCircleOutlined, CreditCardOutlined, InsertChartOutlined, LocalShippingOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, PowerInputOutlined, PsychologyOutlined, SettingsApplicationsOutlined, SettingsSystemDaydreamOutlined, StoreOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext';
const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="logo">
                        Oshabz
                    </div>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <div className="title">MAIN</div>
                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <DashboardIcon />
                            <span>
                                Dashboard
                            </span>
                        </li>
                    </Link>

                    <div className="title">LIST</div>
                    <Link to="/users" style={{ textDecoration: "none" }}>

                        <li>
                            <PersonOutlineOutlined />
                            <span>
                                Users
                            </span>
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: "none" }}>

                        <li>
                            <StoreOutlined />
                            <span>
                                Products
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <CreditCardOutlined />
                            <span>
                                Orders
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <LocalShippingOutlined />
                            <span>
                                Delivery
                            </span>
                        </li>
                    </Link>

                    <div className="title">USEFUL</div>
                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <InsertChartOutlined />
                            <span>
                                Stats
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <NotificationsNoneOutlined />
                            <span>
                                Notifications
                            </span>
                        </li>
                    </Link>

                    <div className="title">SERVICE</div>
                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <SettingsSystemDaydreamOutlined />
                            <span>
                                System Health
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <PsychologyOutlined />
                            <span>
                                Logs
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <SettingsApplicationsOutlined />
                            <span>
                                Settings
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <div className="title">USER</div>

                        <li>
                            <AccountCircleOutlined />
                            <span>
                                Profile
                            </span>
                        </li>
                    </Link>

                    <Link to="/" style={{ textDecoration: "none" }}>

                        <li>
                            <PowerInputOutlined />
                            <span>
                                Logout
                            </span>
                        </li>
                    </Link>
                    <div className="title">COLOR OPTION</div>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
            </div>

        </div>
    )
}

export default Sidebar