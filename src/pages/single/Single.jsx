import React, { useContext, useEffect } from 'react'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableComponent from '../../components/table/TableComponent'
import "./Single.scss"
import { MenuContext } from "../../context/MenuContext";

const Single = () => {
    const { dispatchMenu } = useContext(MenuContext)

    useEffect(() => {
        dispatchMenu({ "type": "CLOSE" })
    }, [])
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/12793815/pexels-photo-12793815.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" classNameitemImg alt="" className="itemImage" />
                            <div className='details'>
                                <h1 className="itemTitle">Jane Doe</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email</span>
                                    <div className='itemKey'>Janedoe@gmail.com</div>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone</span>
                                    <div className='itemKey'>08036587458</div>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address</span>
                                    <div className='itemKey'>No. 10 Lagos Street</div>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country</span>
                                    <div className='itemKey'>Nigeria</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending Last 6 months" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <TableComponent />
                </div>
            </div>
        </div>
    )
}

export default Single