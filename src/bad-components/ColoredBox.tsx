import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeButtonArgs {
    colorChanger: () => void;
}

interface PreviewArgs {
    color: number;
}

function ChangeColor({ colorChanger }: ChangeButtonArgs): JSX.Element {
    return <Button onClick={colorChanger}>Next Color</Button>;
}

function ColorPreview({ color }: PreviewArgs): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const colorChanger = () => setColorIndex((1 + colorIndex) % COLORS.length);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor colorChanger={colorChanger}></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
