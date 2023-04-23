import React, { useState } from 'react'

import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import * as api from '../ReactQuery/usersApi'

const handleClick = (cellValues) => {
  const { id } = cellValues
  const { userEditUrl } = api.generateUrl(id)

  return userEditUrl
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'first_name', headerName: 'First name', width: 130 },
  { field: 'last_name', headerName: 'Last name', width: 130 },
  {
    field: 'full_name',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.first_name || ''} ${params.row.last_name || ''}`
  },
  { field: 'mobile', headerName: 'Mobile', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    renderCell: (cellValues) => {
      return (
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          color="primary"
          onClick={(event) => {
            event.stopPropagation()
          }}
          href={handleClick(cellValues)}
        >
          Edit
        </Button>
      )
    }
  }
]

export default function DataTable(props) {
  const { users } = props
  const [userId, setUserId] = useState()

  return (
    <div style={{ height: 600 }}>
      <DataGrid
        checkboxSelection
        columns={columns}
        getRowHeight={() => 'auto'}
        pageSize={14}
        rows={users || []}
        rowsPerPageOptions={[5]}
        onRowClick={(params) => {
          const { id } = params
          setUserId(id)
        }}
      />
    </div>
  )
}
