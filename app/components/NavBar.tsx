"use client";
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
import { useRouter } from 'next/navigation'

const settings = ["Profile", "Account", "Dashboard", "Logout"];
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
  minHeight: '42px',
  "& .MuiTabs-scroller": {
    height: '44px',
  },
  "& .MuiTab-root": {
    color: "white",
    height: "28px",
    padding: "8px 10px",
    marginRight: "14px",
    textTransform: "none",
    transition: "transform 0.3s, box-shadow 0.3s",
    minHeight: '34px',
    "&:hover": {
      backgroundColor: "rgb(16, 19, 26)",
      borderRadius: "10px",
      transform: "scale(1.03)",
    },
  },
  "& .MuiSvgIcon-root": {
    height: '1.25rem'
  },
  "& .Mui-selected": {
    color: "white !important",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: activeColor,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common?.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common?.white, 0.25),
  },
  display: "none",
  marginLeft: 0,
  marginRight: 12,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }: { theme: any }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "22ch",
      "&:focus": {
        width: "32ch",
      },
    },
  },
}));

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [fav, setFav] = useState(false);
  const setTab = useSetRecoilState(tabsState);
  const tabState = useRecoilValue(tabsState);
  let router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined'){
    const path = window.location.pathname.split('/').slice(1).shift();
    setTab({
      isLoading: false,
      activeTab: path,
    })
    }
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const styles = {
    root: {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  };
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
      if (typeof window !== 'undefined' && router) {
        router.push(`/${v}`)
      }
      
    }, 400);
  };
  return (
    <nav className="border-b border-gray-700 h-30">
      {tabState.isLoading && <LinearDeterminate />}
      <CustomAppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <ImportantDevicesIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/about-me"
              sx={{
                mr: 2,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PORTFOLIO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <ImportantDevicesIcon
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/about-me"
              sx={{
                mr: 1,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PORTFOLIO
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => setFav((fav) => !fav)}
              color="inherit"
              style={{ marginRight: 12 }}
            >
              {fav ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="sagun pic" src="/pic.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        <Box
          sx={{
            width: "100%",
            bgcolor: "transparent",
            justifyContent: "flex-start",
            display: "flex",
            padding: "0px 14px",
          }}
        >
          <CutomTab
            value={tabState.activeTab}
            onChange={(e, v) => handleChange(v)}
            centered
          >
            {tabs.map(({ key, value, Icon, href }) => (
              <Tab className="text-sm" key={value} label={key} value={value} icon={<Icon />} iconPosition="start" />
            ))}
          </CutomTab>
        </Box>
      </CustomAppBar>
    </nav>
  );
};
export default NavBar;
