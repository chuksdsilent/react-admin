import React, { useContext, useEffect } from 'react'
import DataTables from '../../components/datatables/DataTables'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./List.scss"
import { MenuContext } from "../../context/MenuContext";
import { useLocation } from "react-router-dom";

const List = () => {
    const { dispatchMenu } = useContext(MenuContext)
    const location = useLocation();
    console.log("Location ", location.pathname)
    useEffect(() => {
        dispatchMenu({ "type": "CLOSE" })
    }, [location.pathname])
    return (
        <div className='list'>
            <Sidebar />
            <div className="ListContainer">
                <Navbar />
                <DataTables />
            </div>
        </div>
    )
}

export default List