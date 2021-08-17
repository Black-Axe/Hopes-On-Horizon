import React from 'react'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
  } from "@material-ui/core/";
  import { makeStyles } from "@material-ui/core/styles";


  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    }
  }));
  

export default function Search() {
    const classes = useStyles();
    const data = {
        name: [
          { quarter: 1, earnings: 13000 },
          { quarter: 2, earnings: 16500 },
          { quarter: 3, earnings: 14250 },
          
          { quarter: 4, earnings: 19000 },
        ],
        id: [1, 2, 3, 4]
      };

    return (
        <div className={classes.root}>
      {data.id.map((elem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.name.map((elem) => (
            <Grid item xs={3} key={data.name.indexOf(elem)}>
              <Card>
                <CardHeader
                  title={`quarter : ${elem.quarter}`}
                  subheader={`earnings : ${elem.earnings}`}
                />
                
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Hello World
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}


<Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          
            <Grid item xs={3} >
              <Card>
                <CardHeader
                  title={"jssss"}
                />
                
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Hello js
                  </Typography>
                </CardContent>
              </Card>
              
              
            </Grid>
            <Grid item xs={3} >
              <Card>
                <CardHeader
                  title={"oyster"}
                />
                
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Hello deterministicGrouping
                  </Typography>
                </CardContent>
              </Card>
              
              
            </Grid>
          
        </Grid>

      
    </div>
    )
}
