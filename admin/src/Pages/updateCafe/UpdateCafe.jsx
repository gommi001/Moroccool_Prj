import "./cafeupdate.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/charts/Chart"
import List from "../../components/table/List"
import useFetch from "../../hooks/useFetch"
import { useLocation } from "react-router-dom"

//single user page

const Single = () => {

  const location= useLocation()
  const id = location.pathname.split("/")[2]
  const { data, loading, error } = useFetch(`/users/${id}`);

  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        {loading ? (
        "loading"
      ) : (
        <div className="top0"> 
          <div className="left0">
            <div className="editButton">Edit</div>
            <h1 className="title0">User Card</h1>   
            <div className="item0">
              <img alt="" className="itemImg" src="https://images.unsplash.com/photo-1533933269825-da140ad3132f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              />
              <div className="details0">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="itemDetail0">
                  <span className="itemKey1">Type :</span>
                  <span className="itemValue">{data.type}</span>
                </div>
                <div className="itemDetail0">
                  <span className="itemKey0">Phone  :</span>
                  <span className="itemValue">+212(06) 93-777-628</span>
                </div>
                <div className="itemDetail0">
                  <span className="itemKey0">Address  :</span>
                  <span className="itemValue">{data.location}</span>
                </div>
                <div className="itemDetail0">
                  <span className="itemKey0">City :</span>
                  <span className="itemValue">{data.city}</span>
                </div>
              </div>
            </div>            
          </div>        
          <div className="right0">
            <Chart aspect={2/1} title="User Last 8 Month Actions" />
          </div>     
        </div>
       )}
        <div className="bottom0">
          <h1 className="title0">Last Orders </h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single