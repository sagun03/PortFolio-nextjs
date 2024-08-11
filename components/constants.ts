import MenuBookIcon from "@mui/icons-material/MenuBook";
import LanIcon from "@mui/icons-material/Lan";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export const tabs = [
  {
    key: "About Me",
    value: "about-me",
    Icon: MenuBookIcon,
    href: '/'
  },
  {
    key: "Skills",
    value: "skills",
    Icon: SettingsEthernetIcon,
    href: '/skills'
  },
  {
    key: "Projects",
    value: "projects",
    Icon: SpaceDashboardIcon,
    href: '/projects'
  },
  // {
  //   key: "Repositories",
  //   value: "repo",
  //   Icon: LanIcon,
  //   href: '/repo'
  // },
  // {
  //   key: "Resume",
  //   value: "resume",
  //   Icon: DescriptionIcon,
  //   href: '/resume'
  // },
  {
    key: "Contact Me",
    value: "contact",
    Icon: ContactMailIcon,
    href: '/contact'
  },
];
