import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    Link: "/home"
  },
 {
    title: "All Issues",
    icon: <ListRoundedIcon />,
    Link: "/issues"
  },
 {
    title: "My Issues",
    icon: <BugReportRoundedIcon />,
    Link: "/assigned"
  }
]
