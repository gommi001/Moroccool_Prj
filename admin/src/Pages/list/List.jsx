import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.css"

const List = ({columns}) => {
  return (
    <div className="list1">
      <Sidebar/>
      <div className="listContainer1">
        <Navbar/>
        <Datatable columns={columns}/>
      </div>
    </div>
  )
}

export default List