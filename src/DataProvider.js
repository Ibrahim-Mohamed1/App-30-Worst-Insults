import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            url: ''
        }
    }

    getURL = () => {
        axios.get("https://vschool-cors.herokuapp.com?url=https://evilinsult.com/generate_insult.php?lang=en&type=json").then(res => {
            this.setState({
                url: res.data.insult
            })
        }).catch(function() {
            window.location.reload()
        })
    }

    render() {
        return (
            <Provider value={{
                getURL: this.getURL,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}