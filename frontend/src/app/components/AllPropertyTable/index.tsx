import * as React from 'react';
import * as style from 'app/containers/Tables/style.scss';
import { MDBDataTable } from 'mdbreact';

const columns = [
    {
        label: 'propertyID',
        field: 'propertyID',
        sort: 'asc',
        width: 150
    },
    {
        label: 'hostID',
        field: 'hostID',
        sort: 'asc',
        width: 270
    },
    {
        label: 'accommodationType',
        field: 'accommodationType',
        sort: 'asc',
        width: 200
    },
    {
        label: 'roomType',
        field: 'roomType',
        sort: 'asc',
        width: 100
    },
    {
        label: 'maxGuests',
        field: 'maxGuests',
        sort: 'asc',
        width: 150
    },
    {
        label: 'numBathrooms',
        field: 'numBathrooms',
        sort: 'asc',
        width: 100
    },
    {
        label: 'numBedrooms',
        field: 'numBedrooms',
        sort: 'asc',
        width: 100
    },
    {
        label: 'numBeds',
        field: 'numBeds',
        sort: 'asc',
        width: 100
    },
    {
        label: 'pricing',
        field: 'pricing',
        sort: 'asc',
        width: 100
    },
    {
        label: 'isOccupied',
        field: 'isOccupied',
        sort: 'asc',
        width: 100
    },
    {
        label: 'rules',
        field: 'rules',
        sort: 'asc',
        width: 100
    }
]

const formatRows = (rows:any[]) => {
    const out:any[] = [] 
    rows.map((row)=>{
        let obj = {}
        columns.forEach((val, i)=>{
            obj[val.field] = JSON.stringify(row[i])
        })
        out.push(obj)

    })
    return out
}

export const AllPropertyTable = (props) => {
    return (
        <MDBDataTable exportToCSV noBottomColumns={true} paging={false} searching={false} small striped bordered hover columns={columns} rows={formatRows(props.rows)} />
    );
}
