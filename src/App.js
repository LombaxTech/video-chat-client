import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateRoom from "./CreateRoom";
import Room from "./Room";

export default function App() {
    return (
        <div>
            <h1>Video Chat</h1>
            <Router>
                <Switch>
                    <Route exact path="/" component={CreateRoom} />
                    <Route path="/room/:roomID" component={Room} />
                    {/* <Route exact path="/" component={}/> */}
                </Switch>
            </Router>
        </div>
    );
}
