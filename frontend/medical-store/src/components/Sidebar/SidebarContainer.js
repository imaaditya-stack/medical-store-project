import React from "react";
import { ListItem, List, ListItemIcon, ListItemText } from "@material-ui/core";
import { SidebarLinks } from "./SidebarLinks";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth";

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    // console.log("___CLICKED___");
    dispatch(logout(history));
  };

  return (
    <>
      <List>
        {SidebarLinks.map((item) =>
          item.canClick ? (
            <ListItem key={item.title} button onClick={handleLogout}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ) : (
            <ListItem key={item.title} button component={Link} to={item.href}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          )
        )}
      </List>
    </>
  );
};

export default SidebarContainer;
