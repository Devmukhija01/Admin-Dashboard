import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 110 },
    { field: 'email', headerName: 'Email', width: 150 },
];

const rows = [
    { id: 1, name: 'Dev Mukhija', age: 35, email: 'Devmukhija999@gmail.com' },
    { id: 2, name: 'Aditya Parashar', age: 42, email: 'Parasharaditya3394.com' },
];

const Tables = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
};

export default Tables;
