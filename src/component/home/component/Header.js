import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import DehazeIcon from "@material-ui/icons/Dehaze";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import data from "../../../data/data";

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
  const { title } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const back = () => {
    window.location.assign("/");
  };

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <div
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <IconButton>
            <DehazeIcon />
          </IconButton>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {data.sections.map((section) => (
            <MenuItem onClick={handleClose} key={section.id}>
              <Link to={section.url}>{section.title}</Link>
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
          <Link to="" onClick={back}>
            {title}
          </Link>
        </Typography>
      </Toolbar>

      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      />
    </>
  );
}
