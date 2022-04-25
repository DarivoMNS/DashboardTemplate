import React from 'react';
import './datatable.css';
import { DataGrid } from '@mui/x-data-grid';

import { 
  userRows, 
  userColumns
} from '../../datatablesrc';

type Props = {}

const Datatable = (props: Props) => {
  const actionColumn = [
    { 
      field: "action", 
      headerName: "Action", 
      width: 200, 
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      } 
    }
  ];

  return (
    <div className="datatable">
        <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[1]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable