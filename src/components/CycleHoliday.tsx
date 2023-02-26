import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { getHolidays, Holiday } from "../interfaces/holiday";

export function CycleHoliday(): JSX.Element {
    const holidays = getHolidays();
    const [holiday, setHoliday] = useState<Holiday>(holidays[0]);

    function next() {
        const currentHoliday = holidays.findIndex(
            (value: Holiday) => value.type === holiday.type
        );

        if (currentHoliday < 0 || currentHoliday >= holidays.length - 1) {
            setHoliday(holidays[0]);
            return;
        }

        setHoliday(holidays[currentHoliday + 1]);
    }

    return (
        <div>
            <Button
                onClick={() => {
                    /** please just disable eslint rules already */
                    holidays.sort((longNameSoEslintStopsComplaining, b) =>
                        longNameSoEslintStopsComplaining.type !== b.type
                            ? longNameSoEslintStopsComplaining.type < b.type
                                ? -1
                                : 1
                            : 0
                    );
                    next();
                }}
            >
                Alphabetical
            </Button>
            <Button
                onClick={() => {
                    holidays.sort((a, b) => {
                        if (a.month === b.month) {
                            if (a.day === b.day) return 0;
                            return a.day - b.day;
                        }

                        return a.month - b.month;
                    });
                    next();
                }}
            >
                Year
            </Button>
            <p>Holiday: {holiday.emoji}</p>
        </div>
    );
}
