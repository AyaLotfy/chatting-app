import { List, ListItem, ListItemText, Divider, Typography, Box, Button } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ width: 250, p: 2, bgcolor: 'background.paper' }}>
      <Typography variant="h6" gutterBottom>Recent</Typography>
      <List>
        {["What is AI assistant?", "Best laptop brands and features", "How many days are there in a year?", "Can AI lead to job displacement?"].map((text, index) => (
          <ListItem  key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Button variant="outlined" color="primary" sx={{ mt: 2 }}>Upgrade</Button>
    </Box>
  );
};

export default Sidebar;
