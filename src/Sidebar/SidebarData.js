import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BugReportIcon from '@mui/icons-material/BugReport';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

export const sidebarData = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    link: "/"
  },
 {
    title: "Tracked Repos",
    icon: <ListRoundedIcon />,
    link: "/repos"
  }
]
