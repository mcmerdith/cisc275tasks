import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setInProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    return (
        <div>
            <Button
                onClick={() => {
                    setInProgress(true);
                    setAttempts(attempts - 1);
                }}
                disabled={attempts <= 0 || inProgress ? true : false}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setInProgress(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            <p>Remaining Attempts: {attempts}</p>
        </div>
    );
}
