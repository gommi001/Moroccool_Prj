import "./featured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Featured = () => {

  return (

    <div className="featured">
      <div className="top1">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" className="icon9"/>
      </div>
      <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5}  />
          </div>
          <div className="desc">
          <p className="bottomtitle">Total Sales Per Day</p>
          <p className="amount1">$14.6k</p>
        </div>
        <div className="summary">

          <div className="item">
            <div className="itemTitle">This Week</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small"/>
              <div className="resultAmount">$1k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <ArrowDropDownIcon fontSize="small"/>
              <div className="resultAmount">$4.7k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last 3 months</div>
            <div className="itemResult positive">
              <ArrowDropUpIcon fontSize="small"/>
              <div className="resultAmount">$76.1K</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Featured