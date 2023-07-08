import "./widget.css";
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const Widget = ({ type }) => {

    let data;

    //Temporary Money Amount 
     const amount = 1024;   
     const percentage = 30;


    //switch the content of the div that goes with the type
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney: false,
                link:"View All Users",
                icon: <PersonOutlinedIcon className="icon1" style={{
                    color: "white",
                    backgroundColor:"#3599B8"
                }}/>,
            };
            break;
        case "order":
            data={
                title:"Hotels",
                isMoney: false,
                link:"View All Hotels",
                icon: <HotelIcon className="icon1" style={{
                    color:"white",
                    backgroundColor:"#FE9666"
                }}/>,
            };
            break;
        case "earning":
                data={
                    title:"Cafes",
                    isMoney: true,
                    link:"View All Cafes",
                    icon: <LocalCafeIcon className="icon1" style={{
                        color:"white",
                        backgroundColor:"#6EDB8F"
                    }}/>,
                };
                break;
        case "balance":
            data={
                title:"Restaurants",
                isMoney: true,
                link:"View All Restaurants",
                icon: <RestaurantIcon className="icon1" style={{
                    color:"white",
                    backgroundColor:"#FFE366"
                }}/>,
            };
            break;
        default:
            break;
    }

  return (
    <div className="widget2">
        <div className="left2">
            <span className="title2">{data.title}</span>
            <span className="count2">{data.isMoney} {amount} </span>
            <span className="link2"> {data.link} </span>
        </div>
        <div className="right2">
            <div className="percentage positive">
                <ArrowDropUpOutlinedIcon/>
                {percentage} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget