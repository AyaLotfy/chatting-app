import { Box, Typography, Avatar, IconButton, TextField, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatMobile = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" alignItems="center">
        <Avatar />
        <Typography variant="h6" sx={{ ml: 2 }}>Welcome back, John Doe</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body2">
          This is the hamster. Hamsters are small and cute rodents...
        </Typography>
      </Box>
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
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default ChatMobile;
