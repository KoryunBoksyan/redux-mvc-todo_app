import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "50px auto"

  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Todos() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Todo List for task"
        subheader="September 2, 2021"
      />
      <CardMedia
        className={classes.media}
        image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUdGyb///8AAAAaGCP39vcfHSkYFiIGABbn5ucVEyCNjJAMCBkAAAQxLzjIyMkTEB59fIAAAAsAABOHhorAv8EAAA/U1NXg4OH4+PgAABSlpadqaW5bWmBPTlTt7e1GRUwnJS+1tbd2dXk4Nj63triZmZtvbnJgX2SXl5rGxsg+PURVVFqsq66hoaQrKTPj4uS7F6LgAAAD+0lEQVR4nO3ZaXOqPACGYQgUtLghKGjdW083bf//v3srSkUgy5wB3zkz9/VRY8hjFkKwLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAf4wz9SRiGk6DbQGVecKornA2dBiqrv4JQG5d/EIjZ4vEQxy+HaCl6w/LXzs2ve5NA1fJuKJ5H85c43u6fHOG3EtLr265KGoc35X2xG9i/0nghbjM6D3aa/zR1k8H8TyACWT7xcVhdK0se/Uk7CdUGvWJpMXJL3ycLUfzrfxKWTUf1GcPnQbnoUVTGxH0T+v2kpkQcFuZjTULbdkfCq1xYHOtKfvbKBe+ZMHyqL7LqX//52oQ//bgpdaPnT+srexT/X8Lwj6xMeo0oSWjbS/82YEdW2b7hiOYJg4W8kDvMR6E0ob0uTjFRN9wvotBqknFCz1KVmuZ/vDxh2r3ORfGiqmzd6HJjnFBI5s1FNNMlvP4L1vBVWdeq0XFqmlDTKNseO7qE9lPeN2IlL3QS+ZLWtplQNXEyb2NtwuTSN8FOU5fbZCcaJuyuNcXyoaVKaK/PN07NgLcLvX2/hJODrlH2sqtNOM92Zd5GW1fc4HJqmFB8a1v1NtMmPA/TINLW1eRao004PSV0fG2j7PeeNqGdNTzc6it7aPAxYxONTnbly6522eej19OU8D70jTp3kDrh5nRL1E9D2140eUsMMuKxdI2OOH+RXUp7r7DzkaVOmM1VId2wXe1kT1x/z68mLHw7lOy5i1KDhJ9Dw4Sjuyc06EP3n+5D/e0w/4E6Yd90Hr42/ySsTug4+kYNDBKe19JYX9lX5Ym55YTaneSP41ib8LzcVi5V1ei2zSxhqHzcyZwXeGXCQ7anMRjy742fZWgT6pca12BfernL6QdECwuNLqG+VceJNmFe5exNU1fawiDVJvR1m0lP/3yY3+ScmaaufeUY+g4JdZ24vxzmKhImvzWO1WtNG+uMQcLhUtWo39KKhP3rsar6ebrRTal5Qqunmj1f+rO218LRhPIRsenjROOElthKG7X8XfukCZ9uHmoD+R1j205Ak4SWmNe3KV1fu0eScLUuLR7+Oq2v7NBSQKOElqg9QkoeCnev+oTz6huXwKqdi7u2ApoltHyrsqd0o5u3LjUJ3bkT1jyyeyKqdGNsNXmOWGq7UcKfZn1si+1KInHbplLC1WC/FBPJNtoXUfH4J90+V19RNcjp3vIkJyXdUCyO70mn8z3dRl+i8p87z7/6G1+IsepVuC/60cv0u9NJ4v2nCNvMd2paibzkcNzLXmGHQV2TvCtVJXnpIDzXNW7lJggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8nf8AuQo5iCJUvtUAAAAASUVORK5CYII="
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          TODO App for task
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo AppToDo AppToDo App
            ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo AppToDo AppToDo App 
            ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo AppToDo AppToDo App 
            ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo AppToDo AppToDo App 
            ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo App ToDo AppToDo AppToDo App 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

