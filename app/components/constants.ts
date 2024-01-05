import MenuBookIcon from "@mui/icons-material/MenuBook";
import LanIcon from "@mui/icons-material/Lan";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export const tabs = [
  {
    key: "About Me",
    value: "aboutMe",
    Icon: MenuBookIcon,
  },
  {
    key: "Skills",
    value: "skills",
    Icon: SettingsEthernetIcon,
  },
  {
    key: "Projects",
    value: "projects",
    Icon: SpaceDashboardIcon,
  },
  {
    key: "Repositories",
    value: "repo",
    Icon: LanIcon,
  },
  {
    key: "Resume",
    value: "resume",
    Icon: DescriptionIcon,
  },
  {
    key: "Contact",
    value: "contact",
    Icon: ContactMailIcon,
  },
];
