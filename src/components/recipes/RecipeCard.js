/**
 * I didn't write this. This is a modified version of the material-ui demo pages
 * https://material-ui-next.com/demos/cards/
 * https://github.com/mui-org/material-ui/blob/v1-beta/LICENSE
 * MIT License
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment-timezone';

const styles = theme => ({
  card: {
    width: 285,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={this._getAvatar( this.props.createdBy, classes)}
            title={this.props.title}
            subheader={moment( this.props.createdDate ).format('LL')}
          />
          <CardMedia
            className={classes.media}
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography component="p">
              {this.props.summary}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Cooking Instructions:
              </Typography>
              <Typography paragraph>
                {this.props.method}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }

  _getAvatar( user = {}, classes ){
    if(user.photoURL){
      return (
        <Avatar aria-label="Recipe" className={classes.avatar} src={user.photoURL} title={user.displayName} />
      )
    }else if(user.displayName){
      return (
        <Avatar aria-label="Recipe" className={classes.avatar} title={user.displayName}>
          {this._getInitial(user.displayName)}
        </Avatar>
      )
    } else {
      return (
        <Avatar aria-label="Recipe" className={classes.avatar}>
          ?
        </Avatar>
      )
    }
  }

  _getInitial( displayName ){
    return displayName.charAt(0);
  }
}

RecipeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeCard);