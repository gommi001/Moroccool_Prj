import Chart from "../../components/charts/Chart"
import Featured from "../../components/featured/Featured"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import List from "../../components/table/List"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>

        <div className="charts">
          <Featured/>
          <Chart aspect={2/1} title="Last 8 Month Actions" />
        </div>

        <div className="listContainer">
          <div className="listTitle">Latest Payments</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Home