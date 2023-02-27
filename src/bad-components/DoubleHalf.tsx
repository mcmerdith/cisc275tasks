import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Updater {
    updateFunction: () => void;
}

function Doubler({ updateFunction }: Updater): JSX.Element {
    return <Button onClick={updateFunction}>Double</Button>;
}

function Halver({ updateFunction }: Updater): JSX.Element {
    return <Button onClick={updateFunction}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [value, setValue] = useState<number>(10);

    const double = () => setValue(2.0 * value);
    const halve = () => setValue(0.5 * value);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler updateFunction={double}></Doubler>
            <Halver updateFunction={halve}></Halver>
        </div>
    );
}
