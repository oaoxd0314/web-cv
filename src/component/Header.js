import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link,BrowserRouter } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <BrowserRouter>
    <Toolbar className={classes.toolbar}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <IconButton>
            <DehazeIcon />
          </IconButton>
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {sections.map((section) => (
            <MenuItem onClick={handleClose} >
            <Link to={section.url}>
            {section.title}
            </Link>

            </MenuItem>
          ))}
        </Menu>

        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
        <Link to='/'>
        {title}
        </Link>
        </Typography>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      />
    </BrowserRouter>
      </>
  );
}
