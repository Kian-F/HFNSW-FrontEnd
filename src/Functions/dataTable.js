import React, { useState } from 'react'
import { toast } from 'react-toastify'

import Swal from 'sweetalert2'

import { useQuery, useMutation, useQueryClient } from 'react-query'
import * as userActions from '../ReactQuery/usersApi'

import { DataGrid } from '@mui/x-data-grid'
import { Button, Stack } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const handleClick = (cellValues) => {
  const { id } = cellValues
  const { userEditUrl } = userActions.generateUrl(id)

  return userEditUrl
}

const showToastMessage = () => {
  toast.success('Success Notification !', {
    position: toast.POSITION.TOP_RIGHT
  })
}

// const confirmDeleteUser = (id, deleteFn) => {
//   deleteFn({ id }).then(({ success, result }) => {
//     if (!success) {
//       toast.warning(result[0])
//     }
//   })
// }

const confirmDeleteUser = (id, deleteFn, showToastMessage) => {
  toast.success('Success Notification !', {
    position: toast.POSITION.TOP_RIGHT
  })
  Swal.fire({
    title: 'Delete user?',
    text: 'Are you sure?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it.',
    confirmButtonColor: '#DD6B55',
    animation: 'slide-from-top'
  }).then(({ value }) => {
    if (value) {
      // deleteFn({ id })
      toast.success('Api return successfully data, check in section - Api response')
    }
  })
}

// // Imperative subscription
// apiRef.current.subscribeEvent('cellClick', handleEvent)

// // Hook subscription (only available inside the scope of the grid)
// useGridApiEventHandler(apiRef, 'cellClick', handleEvent)

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
        <Stack direction="row" spacing={2}>
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

          <Button
            variant="outlined"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            // onClick={confirmDeleteUser()}
          >
            Delete
          </Button>
        </Stack>
      )
    }
  }
]

export default function DataTable(props) {
  const { users } = props
  const [userId, setUserId] = useState()

  const queryClient = useQueryClient()
  const { deleteUser: deleteFn, getUsers } = userActions
  const { isLoading, isError, error } = useQuery('users', getUsers)

  const deleteUser = useMutation(deleteFn, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

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
        onCellClick={(rows) => {
          confirmDeleteUser(rows.id, deleteFn, showToastMessage)
        }}
        // onCellClick={handleEvent}
      />
    </div>
  )
}
