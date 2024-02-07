import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { Tab, Tabs, BottomNavigation, BottomNavigationAction, useMediaQuery } from "@mui/material";
import { tabs } from "../constants";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tabsState } from "../../store/atoms/tabs";
import LinearDeterminate from "./LinerProgreeBar";
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

const CustomTabs = styled(Tabs)(({ theme }) => ({
  minHeight: "60px",
  "& .MuiTabs-scroller": {
    display: "flex",
    alignItems: "center",
  },
  "& .MuiTab-root": {
    color: "white",
    fontSize: "1rem",
    height: "28px",
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
  const setTab = useSetRecoilState(tabsState);
  const tabState = useRecoilValue(tabsState);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChange = (v: string) => {
    setTab(prev => ({...prev, isLoading: true}));
    setTimeout(() => {
      setTab({
        isLoading: false,
        activeTab: v,
      });
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
             {!isMobile && <CustomTabs
                value={tabState.activeTab}
                onChange={(e, v) => handleChange(v)}
                centered
              >
                {tabs.map(({ key, value, Icon }) => (
                    <Tab
                      value={value}
                      label={key}
                      icon={<Icon />}
                      iconPosition="start"
                      key={value}
                    />
                ))}
              </CustomTabs>}
             {isMobile &&  <h2 className="text-2xl text-transparent border-b-2 border-black font-semibold">Web Portfolio</h2>}
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
      {isMobile && (
        <Box sx={{ bgcolor: "primary.main", color: "white", position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999 }}>
          <BottomNavigation
            value={tabState.activeTab}
            onChange={(e, v) => handleChange(v)}
            showLabels
          >
            {tabs.map(({ key, value, Icon }) => (
              <BottomNavigationAction
                label={key}
                value={value}
                icon={<Icon />}
                key={value}
              />
            ))}
          </BottomNavigation>
        </Box>
      )}
    </nav>
  );
};

export default NavBar;
