import React from "react";

export default class HomeView extends React.Component {
    componentDidMount() {
        console.log('foo')
    }
    render() {
        return (
            <div className="home">
                <h1>This is a homepage</h1>
            </div>
        );
    };
}