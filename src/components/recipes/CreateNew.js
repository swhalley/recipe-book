import React, { Component } from "react";
import SelectableImageList, {images} from '../SelectableImageList';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import TextField from "material-ui/TextField";

export default class CreateNew extends Component {
    state = {
        open : false
    }

    closeCreateRecipeDialog = () => { this.setState({open:false}) }
    openCreateRecipeDialog = () => { this.setState({open:true}) }

    render(){
        return (
            <React.Fragment>
                <Button variant="raised" color={this.props.color} onClick={this.openCreateRecipeDialog}>
                        Create New
                </Button>
                <Dialog open={this.state.open}>
                    <DialogTitle>Create New Recipe</DialogTitle>
                    
                    <DialogContent>
                        <TextField required fullWidth label="Title" inputProps={{maxLength: 50}} />
                        <TextField required fullWidth multiline label="Short Summary" rowsMax="5" inputProps={{maxLength: 255}}/>
                        <TextField required fullWidth multiline label="Method" rowsMax="10" />
                        <SelectableImageList images={images} />
                    </DialogContent>
                    
                    <DialogActions>
                        <Button color="secondary" onClick={this.closeCreateRecipeDialog}>Close</Button>
                        <Button color="primary" onClick={this.closeCreateRecipeDialog}>Create</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}