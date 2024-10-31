import { Box, Typography, TextField, IconButton, InputAdornment, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatArea = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ minHeight: '80vh' }}>
        <Typography variant="h6" color="textSecondary">Welcome back, John Doe</Typography>
      </Box>
      <Box mt={2}>
        <TextField
          fullWidth
          placeholder="Ask me anything..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatArea;
