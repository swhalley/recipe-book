import React, {Component} from 'react';

export default class Oops extends Component {
    constructor(props) {
        super(props);
        this.state = { error : null, info : null };
      }
    
      componentDidCatch(error, info) {
        this.setState({ error, info });
      }
    
      render() {
        if (this.state.error) {
          return (
            <React.Fragment>
                <h1>Sean Goofed and didn't code for this</h1>
                <div>{JSON.stringify(this.state.error)}</div>
                <div>{JSON.stringify(this.state.info)}</div>
            </React.Fragment>
          );
        }
        return this.props.children;
      }
}