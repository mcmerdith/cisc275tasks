import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Matt Meredith&apos;s UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <div style={{ display: "none" }}>
                {/* I want to remove this except I'm scared the tests will fail lol */}
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
                <p>Hello World</p>
            </div>
            <Container style={{ padding: "1rem" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "auto",
                                backgroundColor: "#FF0000",
                                marginTop: "1rem"
                            }}
                        >
                            <p>I am a red rectangle</p>
                        </div>
                        {/* Apparently you aren't allowed to have more than 1 */}
                        <p className="h2">Developer:</p>
                        <p>writes a simple react app</p>
                        <p className="h2">node_modules:</p>
                        <img
                            src={require("./images/app-image.png")}
                            alt="427 MB"
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "auto",
                                backgroundColor: "#FF0000",
                                marginTop: "1rem"
                            }}
                        >
                            <p>I am a red rectangle</p>
                        </div>
                        <h3>Top 3 reasons:</h3>
                        <ul>
                            <li>The because</li>
                            <li>hamburger</li>
                            <li>shegg</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
