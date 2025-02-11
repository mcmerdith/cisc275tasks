import React, { useState } from "react";
import { Button } from "react-bootstrap";

function ShoveBoxButton({ shoveFunction }: { shoveFunction: () => void }) {
    return <Button onClick={shoveFunction}>Shove the Box</Button>;
}

function MoveableBox({ position }: { position: number }): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    shoveFunction={() => setPosition(4 + position)}
                ></ShoveBoxButton>
                <MoveableBox position={position}></MoveableBox>
            </div>
        </div>
    );
}
