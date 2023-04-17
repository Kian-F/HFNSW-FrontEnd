import React from 'react'
import { useQuery } from 'react-query'
import isMobileBrowser from 'is-mobile'

import { Box } from '@mui/material'

import * as api from '../../ReactQuery/usersApi'
import LinearColor from '../../Functions/linearColor'
import DataTable from '../../Functions/dataTable'

const isMobile = isMobileBrowser()

const Users = ({ setUserId }) => {
  const { data: users, isLoading } = useQuery('users', api.getUsers) || []

  const hasMargin = isMobile ? '0px' : '250px'

  return (
    <>
      {isLoading && (
        <>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'auto',
              marginLeft: '251px'
            }}
          >
            <LinearColor />
          </Box>
        </>
      )}

      <Box
        alignItems="center"
        sx={{
          height: '500px',
          width: 'auto',
          ml: hasMargin
        }}
      >
        {!isLoading && <DataTable users={users} setUserId={setUserId} />}
      </Box>
    </>
  )
}

export default Users
