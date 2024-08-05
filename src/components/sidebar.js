import React from 'react';
import { Drawer, List, ListItem, Button } from '@mui/material';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SidebarWithButton = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem>
          <Button variant="contained"  sx={{background:'red'}}>Categories</Button>
        </ListItem>
        <ListItem >
        <i className="fas fa-clapperboard"  style={{ fontSize: '20px' }}>
      </i>
        <Button>Popular</Button>
        </ListItem>
        <ListItem>
          <i className='fa-solid fa-star' style={{ fontSize: '20px' }}>
          </i> 
        <Button>Top rated</Button>
        </ListItem>
        <ListItem>
        <i className='fas fa-sun' style={{ fontSize: '20px' }}>
        </i> 
        <Button>Upcoming</Button>
        </ListItem>
        <ListItem>
          <Button variant="contained"  sx={{background:'red'}}>Genre</Button>
        </ListItem>
        <ListItem>
        <i className='fas fa-film' style={{ fontSize: '15px' }}>
        </i> 
        <Button>Actions</Button>
        </ListItem>
        <ListItem>
        <i className='fas fa-film' style={{ fontSize: '15px' }}>
        </i> 
        <Button>Adventures</Button>
        </ListItem>
        <ListItem>
        <i className='fas fa-bug' style={{ fontSize: '15px' }}>
        </i> 
        <Button>Animations</Button>
        </ListItem>
        <ListItem>
        <i className='fa-solid fa-masks-theater' style={{ fontSize: '15px' }}>
        </i>

        <Button>Comedy</Button>
        </ListItem>
        {/* <ListItem>
        <Button>Setting</Button>
        </ListItem> */}
      </List>
    </Drawer>
  );
};

export default SidebarWithButton;