import React, {Component} from 'react';
import { GridList, GridListTile, GridListTileBar} from "material-ui";
import IconButton from 'material-ui/IconButton';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';
import { withStyles } from 'material-ui';

let styles = {
    checkboxes : {
        color: 'rgba(255, 255, 255, 1.0)'
    }
}

class SelectableImageList extends Component {
    constructor( props ){
        super(props);

        this.state = {
            images: this.props.images || []
        }
    }

    selectImage = ( image,index ) => {
        let currentImages = [...this.state.images];

        currentImages.forEach( (currentImage) => currentImage.isChecked = false );
        currentImages[index].isChecked = true;

        this.setState( { images: currentImages} );
        this.props.onChange( image );
    }

    render(){
        return( 
            <GridList cellHeight={160} cols={2}>
                { this.state.images.map( (image, index ) => (
                    <GridListTile key={image.img}>
                        <img src={image.img} alt={image.name} />
                        <GridListTileBar title={image.name}
                            actionIcon={ this.renderIcon( image, index )} />
                        </GridListTile> 
                ))
                }
            </GridList>
        )
     }

     renderIcon( image, index ){
        let {classes} = this.props;
        image.isChecked = (this.props.selectedImage && this.props.selectedImage === image.img)

         return (
            <IconButton className={classes.checkboxes} onClick={ () => this.selectImage( image, index )} >
                { image.isChecked ? <CheckBox /> : <CheckBoxOutlineBlank /> }
            </IconButton>
         )
     }
}

export default withStyles(styles)(SelectableImageList);