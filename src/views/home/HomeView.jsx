import React from "react";

export class HomeView extends React.Component {
    componentDidMount() {
        console.log('foo')
    }
    render() {
        return (
            <div className="home">
                <p>This is a homepage</p>
            </div>
        );
    };
}