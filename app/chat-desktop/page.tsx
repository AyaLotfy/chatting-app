
import { Box, Typography, Avatar, IconButton, TextField, InputAdornment, CssBaseline, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Sidebar from '../_lib/sidebar/page';
import ChatArea from '../_lib/chat-area/page';

const ChatDesktop = () => {
    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <ChatArea />
                </Grid>
            </Grid>
        </>
    );
};

export default ChatDesktop;

