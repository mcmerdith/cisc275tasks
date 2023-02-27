import React, { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false),
        [name, setName] = useState<string>("Your Name"),
        [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group
                controlId="editMode"
                as={InputGroup}
                className="justify-content-center"
            >
                <Form.Label className="mx-2">Edit Mode</Form.Label>
                <Form.Switch
                    onChange={({ target }) => setEdit(target.checked)}
                ></Form.Switch>
            </Form.Group>
            {edit ? (
                <div>
                    <Form.Group
                        controlId="editName"
                        className="mb-2"
                        as={FloatingLabel}
                        label="Name"
                    >
                        <Form.Control
                            type="text"
                            onChange={({ target }) => setName(target.value)}
                            value={name}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group
                        controlId="editStudent"
                        className="mb-2"
                        as={InputGroup}
                    >
                        <Form.Label className="mx-2">Student?</Form.Label>
                        <Form.Check
                            onChange={({ target }) =>
                                setStudent(target.checked)
                            }
                            checked={student}
                        ></Form.Check>
                    </Form.Group>
                </div>
            ) : (
                <p>
                    {name} is{student ? " " : " not "}a student
                </p>
            )}
        </div>
    );
}
