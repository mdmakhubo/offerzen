import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'timeago.js';
import { intRequest } from '../datasource';
import './home.scss'
import Topbar from '../topbar/Topbar';

const Home = () => {

    const userColumns = [        
        { field: "image", headerName: "Candidate", width:200, renderCell: (params) => (
        <div className="cellWithImg">
            <img src={params.row.image} alt="img" className="cellImg" />
            {params.row.candidate}
        </div>
        )},
        { field: "role", headerName: "Role", width: 200 },
        { field: "last_comms", headerName: "Last Communication", width:200, renderCell: (params) => (
        <div className="cellWithComms">
            {params.row.last_comms.description} &nbsp;
            {format(params.row.last_comms.date_time)}
        </div>
        )},
        { field: "salary", headerName: "Salary", width: 130 },
        { field: "sent_by", headerName: "Sent By", width: 170 },


    ];

    const actionColumn = { field: "archived", headerName: "Action", width: 150, renderCell: (params) => {

        return (
            <div className="cellAction">       
                <div className="archiveButton">{params.row.archived ? "Archive" : "Unarchive"}</div>
            </div>
        );        
    } 

}


  return (
    <div className='home'>
        <div className="dataTitle">
            <Topbar />                       
        </div>        
        <div className="datGrid">
            <div className="interviews" style={{textAlign:"right", color: "#7C7C80", fontFamily: 'ProximaNova', marginBottom: "10px"}}>
                7 interview requests
            </div>
            <DataGrid
            className='dataGrid'
            rows={intRequest}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            getRowId={row => row.id}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
        
    </div>
  )
}

export default Home