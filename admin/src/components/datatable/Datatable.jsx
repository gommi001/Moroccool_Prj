import "./datatable.css";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



const Datatable = ({columns}) => {

  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const {data, loading, error} = useFetch(`/${path}`)

  

  useEffect(() => {
    setList(data);
  },[data]);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
      window.location.reload(false)
    } catch (err) {}
  };


  const actionColumn = [{field : "action", headername : "Action", width : 200 , renderCell:(params)=>{
    return(
      <div className="cellAction">
        <Link to={`/${path}/${data.id}`} style={{textDecoration:"none"}}>
          <Button onClick='' style={{width:'100%'}} variant="contained" color="info">
            Edit
          </Button>
        </Link>
              
        <Button onClick={() => handleDelete(params.row._id)} style={{width:'100%'}} variant="contained" color="error">
          Delete
        </Button>

      </div>
    )
  }}]

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path} Space
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        className="table"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        
      />
    </div>
  )
}

export default Datatable


{/* 
rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(row) => row._id}
*/}