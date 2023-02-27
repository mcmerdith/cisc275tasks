import React, { useState } from "react";
import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3),
        [requested, setRequested] = useState<string>("");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestedAttempts" as={InputGroup}>
                <InputGroup.Text>{attempts} attempts</InputGroup.Text>
                <FloatingLabel label="Get Attempts" className="flex-grow-1">
                    <Form.Control
                        type="number"
                        onChange={({ target }) => setRequested(target.value)}
                    ></Form.Control>
                </FloatingLabel>
                <Button
                    onClick={() => {
                        const parsed = parseInt(requested);
                        if (parsed) setAttempts(attempts + parsed);
                    }}
                >
                    Gain
                </Button>
            </Form.Group>
            <Button
                className="w-100"
                onClick={() => {
                    if (attempts > 0) setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0}
            >
                Use
            </Button>
        </div>
    );
}
