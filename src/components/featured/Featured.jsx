import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const Featured = () => {

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={79} text="79%" strokeWidth={3} className="circular-progressbar" />
                </div>
                <p className="title">Total Sales made Todat</p>
                <p className="amount">$420</p>
                <div className="desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, reiciendis.
                </div>
                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="item">
                            <div className="itemResult positive">
                                <KeyboardArrowDownIcon font="small" />
                                <div className="itemAmount">$12.9k</div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="item">
                            <div className="itemResult negative">
                                <KeyboardArrowDownIcon font="small" />
                                <div className="itemAmount">$12.9k</div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="item">
                            <div className="itemResult positive">
                                <KeyboardArrowDownIcon font="small" />
                                <div className="itemAmount">$12.9k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
