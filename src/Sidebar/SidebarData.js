import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';

export const sidebarData = [
  {
    title: "Home",
    icon: <HomeRoundedIcon />,
    link: "/",
    id: "home"
  },
 {
    title: "Tracked Repos",
    icon: <ListRoundedIcon />,
    link: "/repos",
    id: "tracked-repos"
  }
]
