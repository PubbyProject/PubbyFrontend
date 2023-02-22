import { useEffect } from "react";

export function HomeView(props) {
    useEffect(() => {
        console.log('hello world')
    });
    return (
        <div className="home">
            <p>This is a homepage</p>
        </div>
    );
}