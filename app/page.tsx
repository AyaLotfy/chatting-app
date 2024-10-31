import Image from "next/image";
import styles from "./page.module.css";

import { Box, CssBaseline, Grid } from '@mui/material';
import ChatArea from "./_lib/chat-area/page";
import Sidebar from "./_lib/sidebar/page";
import SignInDesktop from "./sign-in-desktop/page";


export default function Home() {
  return ( 
    <SignInDesktop/>
  );
}
