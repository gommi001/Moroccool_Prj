///////////////// Users /////////////
export const userColumns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "user",
      headerName: "User",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    
  ];

  ////////////////////// Cafes //////////////

  export const cafeColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "updatedAt",
      headerName: "Updated at",
      width: 230,
    },
    
  ];

///////////////// Hotels /////////////
  
  export const hotelColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "updatedAt",
      headerName: "Updated at",
      width: 230,
    },
    
  ];
///////////////// Events /////////////

  export const eventColumns = [
    { field: "_id", headerName: "ID", width: 250 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "type",
      headerName: "Type",
      width: 100,
    },
    {
      field: "city",
      headerName: "City",
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      width: 230,
    },
    
  ];
  
  

