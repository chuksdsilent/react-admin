import React from 'react'
import "./DataTables.scss"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../databasesource';
import { Link } from "react-router-dom"
const DataTables = () => {

    const actionColumn = [
        {
            field: "action", headerName: "Action", width: 200, renderCell: () => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                        </Link>
                        <div className="viewButton">View</div>
                        <Link to="/users/test" style={{ textDecoration: "none" }}>

                            <div className="deleteButton">Delete</div>
                        </Link>
                    </div>
                )
            }
        }
    ]
    return (
        <div className='datatables' style={{ height: 600, width: '100%' }}>
            <div className="dataTableTitle">
                Add New User
                <Link to="/users/new" style={{ textDecoration: "none" }} className="link">
                    <div className="deleteButton">Add New</div>
                </Link>
            </div>
            <DataGrid
                className='datagrid'
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    )
}

export default DataTables