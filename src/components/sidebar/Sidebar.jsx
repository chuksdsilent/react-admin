import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AccountCircleOutlined, CreditCardOutlined, InsertChartOutlined, LocalShippingOutlined, NotificationsNoneOutlined, PersonOutlineOutlined, PowerInputOutlined, PsychologyOutlined, SettingsApplicationsOutlined, SettingsSystemDaydreamOutlined, StoreOutlined } from '@mui/icons-material';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <div className="logo">
                    Oshabz
                </div>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <div className="title">MAIN</div>
                    <li>
                        <DashboardIcon />
                        <span>
                            Dashboard
                        </span>
                    </li>
                    <div className="title">LIST</div>

                    <li>
                        <PersonOutlineOutlined />
                        <span>
                            Users
                        </span>
                    </li>
                    <li>
                        <StoreOutlined />
                        <span>
                            Products
                        </span>
                    </li>
                    <li>
                        <CreditCardOutlined />
                        <span>
                            Orders
                        </span>
                    </li>
                    <li>
                        <LocalShippingOutlined />
                        <span>
                            Delivery
                        </span>
                    </li>
                    <div className="title">USEFUL</div>

                    <li>
                        <InsertChartOutlined />
                        <span>
                            Stats
                        </span>
                    </li>
                    <li>
                        <NotificationsNoneOutlined />
                        <span>
                            Notifications
                        </span>
                    </li>
                    <div className="title">SERVICE</div>

                    <li>
                        <SettingsSystemDaydreamOutlined />
                        <span>
                            System Health
                        </span>
                    </li>
                    <li>
                        <PsychologyOutlined />
                        <span>
                            Logs
                        </span>
                    </li>
                    <li>
                        <SettingsApplicationsOutlined />
                        <span>
                            Settings
                        </span>
                    </li>
                    <div className="title">USER</div>

                    <li>
                        <AccountCircleOutlined />
                        <span>
                            Profile
                        </span>
                    </li>
                    <li>
                        <PowerInputOutlined />
                        <span>
                            Logout
                        </span>
                    </li>
                    <div className="title">COLOR OPTION</div>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>

        </div>
    )
}

export default Sidebar