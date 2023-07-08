import React from 'react'
import './data.scss'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import RouterIcon from '@mui/icons-material/Router';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';



const data = [
    { name: <RouterIcon fontSize='large'/>, status: <DoneIcon className='done'/> },
    { name: "Smoking Area", status:  <CloseIcon className='icon_close'/>},
    { name: "BBQ", status: <DoneIcon className='done'/>},
    { name: "Student Area", status: <CloseIcon className='icon_close'/>},
    { name: <DeliveryDiningIcon fontSize='large'/>, status: <DoneIcon className='done'/>},
    { name: "Policia", status: <DoneIcon className='done'/>},
    { name: "Local", status: <CloseIcon className='icon_close'/>},
    { name: "Host", status: <DoneIcon className='done'/>},
    { name: "C", status: <DoneIcon className='done'/>},
    { name: "M", status: <DoneIcon className='done'/>},
  ]

function Data() {
  return (
    <>
        <h2 className='heading'>More Informations</h2>
    <div className="table">
       
      <table>
        <tr>
          <th>Service</th>
          <th>Status</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className='sername'>{val.name}</td>
              <td>{val.status}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </>
  )
}

export default Data