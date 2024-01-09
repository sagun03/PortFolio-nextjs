import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, LinearProgress, Tab, Tabs } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { tabs } from "./constants";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tabsState } from "../store/atoms/tabs";
import LinearDeterminate from "./LinerProgreeBar";
import { useRouter } from "next/navigation";
import ResumeDownload from "./ResumeDownload";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  "& .MuiContainer-root": {
    paddingRight: "12px",
    paddingLeft: "12px",
  },
  "& .MuiToolbar-root": {
    minHeight: "60px", // Center align items in the toolbar
  },
}));
const activeColor = "#F78066";
const CutomTab = styled(Tabs)(({ theme }) => ({
  minHeight: "60px",
  "& .MuiTabs-scroller": {
    // height: "44px",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTab-root": {
    color: "white",
    fontSize: "1rem",
    height: "28px",
    // padding: "8px 10px",
    marginLeft: "14px",
    textTransform: "none",
    transition: "transform 0.3s, box-shadow 0.3s",
    minHeight: "40px",
    "&:hover": {
      backgroundColor: "rgb(16, 19, 26)",
      borderRadius: "10px",
      transform: "scale(1.03)",
    },
  },
  "& .MuiSvgIcon-root": {
    height: "1.25rem",
  },
  "& .Mui-selected": {
    color: "white !important",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: activeColor,
  },
}));

const NavBar = () => {
  const [fav, setFav] = useState(false);
  const setTab = useSetRecoilState(tabsState);
  const tabState = useRecoilValue(tabsState);
  let router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.split("/").slice(1).shift();
      setTab({
        isLoading: false,
        activeTab: path,
      });
    }
  }, []);
  const handleChange = (v: string) => {
    setTab({
      isLoading: true,
      activeTab: tabState.activeTab,
    });
    setTimeout(() => {
      setTab({
        isLoading: false,
        activeTab: v,
      });
      if (typeof window !== "undefined" && router) {
        router.push(`/${v}`);
      }
    }, 400);
  };
  return (
    <nav className="border-b border-gray-700 h-30">
      {tabState.isLoading && <LinearDeterminate />}
      <CustomAppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                width: "100%",
                bgcolor: "transparent",
                justifyContent: "flex-start",
                display: "flex",
              }}
            >
              <CutomTab
                value={tabState.activeTab}
                onChange={(e, v) => handleChange(v)}
                centered
              >
                {tabs.map(({ key, value, Icon }) => (
                  <Tab
                    value={value}
                    key={value}
                    label={key}
                    icon={<Icon />}
                    iconPosition="start"
                  />
                ))}
              </CutomTab>
            </Box>
            <Box
              sx={{
                bgcolor: "transparent",
                justifyContent: "flex-end",
                display: "flex",
                padding: "0px 14px",
              }}
            >
              <ResumeDownload />
              <div className="flex items-center">
                <Avatar alt="sagun pic" src="/pic.jpg" />
              </div>
            </Box>
          </Toolbar>
        </Container>
      </CustomAppBar>
    </nav>
  );
};
export default NavBar;
