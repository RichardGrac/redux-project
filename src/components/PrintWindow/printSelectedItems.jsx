import React, {Component} from 'react'

class PrintSelectedItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            usersToPrint: []
        }
    }

    componentWillMount() {
        // Read the url params and extract them
        this.setState({
            usersToPrint: window.location.search.split('=')[1].split(',')
        });
    }

    componentDidMount() {
        // Send array with IDs to look for
        console.log('usersToPrint: ', this.state.usersToPrint);
    }
    
    render() {
        return (
            <div>
                <h1>Users to Print</h1>
                <ul>
                {this.state.usersToPrint.map((user, i) =>
                    <li key={i}>
                        {user}
                    </li>
                )}
                </ul>
            </div>
        );
    }
}

export default PrintSelectedItems;