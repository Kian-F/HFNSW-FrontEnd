import React from 'react'
import { useQuery } from 'react-query'
import isMobileBrowser from 'is-mobile'

import { Box } from '@mui/material'

import * as api from '../../ReactQuery/usersApi'
import LinearColor from '../../Functions/LinearColor'
import DataTable from '../../Functions/dataTable'

const isMobile = isMobileBrowser()

const Users = ({ setUserId }) => {
  const { data: users, isLoading, hasData } = useQuery('users', api.getUsers) || []

  const hasMargin = isMobile ? '0px' : '250px'

  return (
    <Box
      alignItems="center"
      sx={{
        height: '500px',
        width: 'auto',
        ml: hasMargin
      }}
    >
      <Box>{isLoading && <LinearColor width="auto" />}</Box>

      {!isLoading && <DataTable users={users} setUserId={setUserId} />}
    </Box>
  )
}

export default Users
