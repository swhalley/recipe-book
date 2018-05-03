import React, { Component } from "react";
import SelectableImageList, {images} from '../SelectableImageList';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogContent, DialogTitle } from 'material-ui/Dialog';
import TextField from "material-ui/TextField";
import recipeRepository from '../../repository/recipeRepository';

const initialState = {
    open : false,
    values : {
        title: '',
        summary: '',
        method : ''
    },
    errors: {
        title: '',
        summary: '',
        method: ''
    },
    image: {}
}


export default class CreateNew extends Component {
    state = {...initialState }

    handleInputChange = (event) => { 
        let values = {...this.state.values};
        values[event.target.name] = event.target.value;

        this.setState({ values });
    }
    imageChanged = ( image ) => { this.setState({ image })}
    closeCreateRecipeDialog = () => { this.setState({...initialState }) }
    openCreateRecipeDialog = () => { this.setState({open:true}) }
    createRecipe = () => {
        if( this.validate() ){
            recipeRepository.create( this.state.values, this.state.image );
            this.closeCreateRecipeDialog();
        }
        
    }

    validate(){
        let result = true;
        let errors = {...this.state.errors};

        for(let key in this.state.values){
            let value = this.state.values[key];

            errors[key] = (value.length === 0 || !value.trim()) ? 'Field is Required' : '';
            result = result && !errors[key];             
        }

        this.setState({errors});
        return result;
    }

    render(){
        return (
            <React.Fragment>
                <Button variant="raised" color={this.props.color} onClick={this.openCreateRecipeDialog}>
                        Create New
                </Button>
                <Dialog open={this.state.open}>
                    <DialogTitle>Create New Recipe</DialogTitle>
                    
                    <DialogContent>
                        <TextField label="Title" 
                            required 
                            fullWidth 
                            name="title"
                            value={this.state.values.title} 
                            onChange={this.handleInputChange}
                            error={!!this.state.errors.title} 
                            helperText={this.state.errors.title}
                            inputProps={{maxLength: 50}} />
                        <TextField label="Short Summary"
                            required 
                            fullWidth 
                            multiline  
                            name="summary"
                            value={this.state.values.summary}
                            onChange={this.handleInputChange} 
                            error={!!this.state.errors.summary} 
                            helperText={this.state.errors.summary}
                            rowsMax="5" 
                            inputProps={{maxLength: 255}} />
                        <TextField label="Method"
                            required 
                            fullWidth 
                            multiline 
                            name="method"
                            value={this.state.values.method} 
                            onChange={this.handleInputChange}
                            error={!!this.state.errors.method} 
                            helperText={this.state.errors.method}
                            rowsMax="10" />
                        <SelectableImageList images={images} selectedImage={this.state.image.img} onChange={this.imageChanged} />
                    </DialogContent>
                    
                    <DialogActions>
                        <Button color="secondary" onClick={this.closeCreateRecipeDialog}>Close</Button>
                        <Button color="primary" onClick={this.createRecipe}>Create</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}