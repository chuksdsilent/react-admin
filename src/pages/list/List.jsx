import React from 'react'
import DataTables from '../../components/datatables/DataTables'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./List.scss"
const List = () => {
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