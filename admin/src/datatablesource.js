export const userColumns = [
    { field: "_id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
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
      width: 120,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    
  ];

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
      field: "title",
      headerName: "Title",
      width: 230,
    },
    
  ];
  
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
      field: "title",
      headerName: "Title",
      width: 230,
    },
    
  ];
  
  

