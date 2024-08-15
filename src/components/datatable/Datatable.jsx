import React, { useState } from 'react'
import './Datatable.scss'
import  {DataGrid}  from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatableSource';
import { Link } from 'react-router-dom';
const Datatable = () => {

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const[data,setData] = useState(userRows);
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <div className = "deleteButton" onClick={()=> handleDelete(params.id)}>Delete</div>
                <Link  to = "/customers/customerId" style = {{ textDecoration: "none" }}>
                  <div className = "viewButton">View</div>
                </Link>
              </div>
            );
          },
        },
    ];

  return (
    <div className = "datatable">
        <div className="datatableTitle">
            <span>Add New User</span>
            <Link to = "/customers/customerId/new" style = {{ textDecoration: "none" }}>
            <span className = "link">Add New</span>
          </Link>
        </div>
        <DataGrid className = "datagrid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 8 },
            },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable