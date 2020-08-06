import React from 'react'
// import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Create () {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}> */}
        <LockOutlinedIcon style={{ fontSize: 50 }} /> ``
        {/* </Avatar> */}
        <Typography component='h1' variant='h5'>
          Create your owned Identity Profile
        </Typography>``
        <form className={classes.form} noValidate>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='delete'
            className={classes.submit}
          >
            Connect Ethereum Wallet
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                got something to prove your Identity ? Prove it
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
