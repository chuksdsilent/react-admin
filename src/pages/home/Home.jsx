import React, { useContext, useEffect } from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableComponent from '../../components/table/TableComponent'
import Widgets from '../../components/widget/Widget'
import { MenuContext } from "../../context/MenuContext";


import "./Home.scss"
import "./Home.scss"
const Home = () => {
    const { dispatchMenu } = useContext(MenuContext)

    useEffect(() => {
        dispatchMenu({ "type": "CLOSE" })
    }, [])
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
                    <Chart title="Last 6 month Revenue" aspect={2 / 1} />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <TableComponent />
                </div>
            </div>
        </div>
    )
}

export default Home