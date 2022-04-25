import { GridValueGetterParams } from '@mui/x-data-grid';

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 160 },
    { field: 'lastName', headerName: 'Last name', width: 160 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 230,
        valueGetter: (params: GridValueGetterParams) =>
          `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];  

// Temp data
export const userRows = [
    { id: 1, lastName: 'II Elessar', firstName: 'Aragorn', age: 46 },
    { id: 2, lastName: 'Undómiel', firstName: 'Arwen', age: 36 },
    { id: 3, lastName: 'Baggins', firstName: 'Frodo', age: 27 },
    { id: 4, lastName: 'Gamgee', firstName: 'Samwise', age: 26 },
    { id: 5, lastName: 'Of Gondor', firstName: 'Boromir', age: 43 },
    { id: 6, lastName: 'Took', firstName: 'Peregrin "Pippin"', age: 23 },
    { id: 7, lastName: 'Of Gondor', firstName: 'Faramir', age: 39 },
    { id: 8, lastName: 'Brandybuck', firstName: 'Meriadoc "Merry"', age: 22 },
    { id: 9, lastName: null, firstName: 'Sméagol', age: 65 },
    { id: 10, lastName: null, firstName: 'Legolas', age: 35 },
];