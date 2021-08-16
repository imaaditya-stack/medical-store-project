import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import StoreIcon from "@material-ui/icons/Store";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

export const SidebarLinks = [
  {
    title: "Logout",
    icon: <PowerSettingsNewIcon />,
    href: "/",
    canClick: true,
  },
  {
    title: "Manage Store",
    icon: <StoreIcon />,
    href: "/stores",
  },
  {
    title: "Manage Medicine",
    icon: <LocalHospitalIcon />,
    href: "/medicines",
  },
  {
    title: "Manage Company",
    icon: <StoreIcon />,
    href: "/companies",
  },
];
