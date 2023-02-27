import React, { useState } from "react";
import { Col, Form, FormGroup, Row } from "react-bootstrap";
import { getColors, Color } from "../interfaces/color";

export function ChangeColor(): JSX.Element {
    const colors = getColors(),
        [currentColor, setColor] = useState<number>(0),
        objColor = colors[currentColor];

    return (
        <div>
            <h3>Change Color</h3>
            <Row>
                <FormGroup controlId="colorInput" as={Col} sm="auto">
                    {colors.map((color: Color, index: number) => (
                        <Form.Check
                            key={index}
                            type="radio"
                            name="color"
                            onChange={({ target }) => {
                                setColor(parseInt(target.value));
                            }}
                            label={color.name}
                            value={index}
                            checked={currentColor === index}
                        />
                    ))}
                </FormGroup>
                <Col
                    className="d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: objColor.color }}
                    data-testid="colored-box"
                >
                    <p>
                        The color is currently {objColor.name} ({currentColor})
                    </p>
                </Col>
            </Row>
        </div>
    );
}
