import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selected, setSelected] = useState<number>(0);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoice" as={InputGroup}>
                <InputGroup.Text>
                    {expectedAnswer === options[selected] ? "✔️" : "❌"}
                </InputGroup.Text>
                <Form.Select
                    onChange={({ target }) => {
                        setSelected(parseInt(target.value));
                    }}
                >
                    {options.map((option: string, index: number) => (
                        <option key={index} value={index}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
