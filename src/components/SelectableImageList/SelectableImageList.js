import React, {Component} from 'react';
import { GridList, GridListTile, GridListTileBar} from "material-ui";
import IconButton from 'material-ui/IconButton';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';

export default class SelectableImageList extends Component {
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
    }

    render(){

        return( 
            <GridList cellHeight={160} cols={2}>
                { this.state.images.map( (image, index ) => (
                    <GridListTile key={image.img}>
                        <img src={image.img} alt={image.name} />
                        <GridListTileBar title={image.name}
                            actionIcon={
                                <IconButton onClick={ () => this.selectImage( image, index )} >
                                    { image.isChecked ? <CheckBox color="secondary" /> : <CheckBoxOutlineBlank color="secondary" /> }
                                </IconButton>
                            } />
                        </GridListTile> 
                ))
                }
            </GridList>
        )
     }
}