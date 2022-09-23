import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Grid, Link } from '@mui/material';

function ShowContact(position) {
  if (position.contactType === "Link") {
    return (
      <>
      <p>{position.contactType}:</p>
      
      <Link href={position.contact} >{position.contact}</Link>
    </>
    
    );
  }
  else if (position.contactType === "Email") {
    return (
      <>
        <p>{position.contactType}:</p>
        <p>{position.contact}</p>
      </>);
  } else {
    return (<>
      <p>{position.contactType}:</p>
      <p>{position.contact}</p>
    </>);
  }
}

export default function ListPositions(props) {
  const positions = props.positions || [];
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {positions.map((position) => {
        return (
          <React.Fragment key={position.id}>
            <ListItem alignItems="flex-start">
              <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <ListItemText
                    primary={position.position}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {position.companyName}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <ListItemText
                    primary={position.type}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {position.local}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>

                  {ShowContact(position)}
                </Grid>
              </Grid>


            </ListItem>
            <Divider component="li" />
          </React.Fragment>);
      })}


    </List>
  );
}
