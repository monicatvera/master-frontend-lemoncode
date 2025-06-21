import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import * as classes from './app.layout.styles'
import { linkRoutes } from '#core/router'
import { useNavigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props

  const navigate = useNavigate()

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => {
              navigate(linkRoutes.characterCollection)
            }}
            title="Go to the main page"
          >
            <h3>Rick and Morty (con fetch)</h3>
          </IconButton>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  )
}
