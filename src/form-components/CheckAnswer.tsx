import React, { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [value, setValue] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer" as={InputGroup}>
                <InputGroup.Text>
                    {expectedAnswer === value ? "✔️" : "❌"}
                </InputGroup.Text>
                <FloatingLabel label="Your Answer" className="flex-grow-1">
                    <Form.Control
                        type="text"
                        onChange={({ target }) => setValue(target.value)}
                    ></Form.Control>
                </FloatingLabel>
            </Form.Group>
        </div>
    );
}
