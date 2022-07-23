import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import FileUploadIcon from '@mui/icons-material/FileUpload';

import "./New.scss"
const New = ({ title, inputs }) => {
    const [file, setFile] = useState("")

    console.log(file)
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>
                        {title}
                    </h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"} alt="" />
                    </div>
                    <div className="right">
                        <form action="">
                            <div className="formInput">
                                Image<label htmlFor="file" className='icon'>
                                    <FileUploadIcon />
                                </label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} name="" placeholder='John Doe' id="file" style={{ display: "none" }} />
                            </div>
                            {inputs && inputs.map(input => (
                                <div className="formInput" key={input.id}>
                                    <label htmlFor="Username">{input.label}</label>
                                    <input type={input.type} name="" placeholder={input.placeholder} id="" />
                                </div>
                            ))}
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New