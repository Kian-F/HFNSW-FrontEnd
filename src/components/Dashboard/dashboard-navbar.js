import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material'
import { Bell as BellIcon } from '../../icons/bell'
import { UserCircle as UserCircleIcon } from '../../icons/user-circle'
import { Users as UsersIcon } from '../../icons/users'

import AuthenticationButton from '../../auth/AuthenticationButton'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'primary',
  boxShadow: theme.shadows[1]
}))

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 240
          },
          right: { lg: 300 },
          width: {
            lg: 'calc(100% - 240px)'
          }
        }}
        {...other}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            {/* <MenuIcon fontSize="small" /> */}
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>{/* <SearchIcon fontSize="small" /> */}</IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Link to="/Account">
            <Avatar
              sx={{
                height: 40,
                width: 40,
                ml: 1
              }}
              src="/static/images/avatars/avatar_1.png"
            >
              <UserCircleIcon fontSize="small" />
            </Avatar>
          </Link>
          <AuthenticationButton />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  )
}

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
}
