import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widget/Widget'
import "./Home.scss"
import "./Home.scss"
const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type="users" />
                    <Widgets type="order" />
                    <Widgets type="earnings" />
                    <Widgets type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
}

export default Home