import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./TableComponent.scss"
const TableComponent = () => {

    const rows = [
        {
            id: 2847842,
            product: "Hp folio 2022",
            customer: "James Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
            img: "https://images.pexels.com/photos/12694483/pexels-photo-12694483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 54715862,
            product: "Mouse",
            customer: "Engr. Samson",
            date: "1 March",
            amount: 4000,
            method: "Cash on Delivery",
            status: "Declined",
            img: "https://images.pexels.com/photos/12507122/pexels-photo-12507122.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        },
        {
            id: 96587456,
            product: "Samsung Monitor",
            customer: "Dr. Kid",
            date: "2 June",
            amount: 958745,
            method: "Cash on Delivery",
            status: "Pending",
            img: "https://images.pexels.com/photos/9995076/pexels-photo-9995076.png?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        }
    ]

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product</TableCell>
                        <TableCell className='tableCell'>Customer</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Amount</TableCell>
                        <TableCell className='tableCell'>Payment</TableCell>
                        <TableCell className='tableCell'>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                        >
                            <TableCell className='tableCell'>{row.id}</TableCell>
                            <TableCell className='tableCell'>
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className='image' />
                                    {row.product}
                                </div>
                            </TableCell>
                            <TableCell className='tableCell'>{row.customer}</TableCell>
                            <TableCell className='tableCell'>{row.date}</TableCell>
                            <TableCell className='tableCell'>{row.amount}</TableCell>
                            <TableCell className='tableCell'>{row.method}</TableCell>
                            <TableCell className='tableCell'>
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableComponent