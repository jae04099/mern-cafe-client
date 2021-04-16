import React from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Start from "./components/pages/Start";
import Test from "./components/pages/Test";
import Result from "./components/pages/Result";

function App() {
    return (
        <>
            <GlobalStyles />
            <RootContainer>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Start} />
                        <Route path="/test" component={Test} />
                        <Route path="/result" exact component={Result} />
                    </Switch>
                </Router>
            </RootContainer>
        </>
    );
}

const RootContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    max-width: 480px;
    height: 100vh;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export default App;
