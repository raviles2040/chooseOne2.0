import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { NavLink } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Link from "@material-ui/core/Link";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "white"
  }
}));

function MenuAppBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.title} to="/" style={{ textDecoration: "none" }}>
              ChooseOne
            </NavLink>
          </Typography>
          {auth && (
            <div>
              {props.userIsLoged && (
                <Link component={NavLink} to="/RandomQuestions">
                  <Button variant="contained" color="primary" className={classes.button}>
                    Juega ya
                  </Button>
                </Link>
              )}
              {props.userIsLoged && (
                <Link component={NavLink} to="/QuestionComponent">
                  <Fab
                    size="small"
                    color="primary"
                    aria-label="Add"
                    className={[classes.fab, "m-2"]}
                  >
                    <AddIcon />
                  </Fab>
                </Link>
              )}
              <Fab
                size="small"
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </Fab>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                {!props.userIsLoged && (
                  <NavLink to="/Login">
                    <MenuItem className={classes.link} onClick={handleClose}>
                      Login
                    </MenuItem>
                  </NavLink>
                )}
                {props.userIsLoged && (
                  <NavLink to="/">
                    <MenuItem onClick={() => props.closeSession(handleClose)}>
                      Cerrar sessión
                    </MenuItem>
                  </NavLink>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MenuAppBar;
