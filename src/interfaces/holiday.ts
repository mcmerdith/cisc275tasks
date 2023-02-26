/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type HolidayType =
    | "memorial_day"
    | "independence_day"
    | "labor_day"
    | "spooky_day"
    | "chrihmuh";

export interface Holiday {
    type: HolidayType;
    emoji: string;
    month: number;
    day: number;
}

export function getHolidays(): Array<Holiday> {
    return [
        {
            type: "memorial_day",
            emoji: "🎖️",
            month: 5,
            day: 29
        },
        {
            type: "independence_day",
            emoji: "🎆",
            month: 7,
            day: 4
        },
        {
            type: "labor_day",
            emoji: "🛠️",
            month: 9,
            day: 4
        },
        {
            type: "spooky_day",
            emoji: "🎃",
            month: 10,
            day: 31
        },
        {
            type: "chrihmuh",
            emoji: "🎄",
            month: 12,
            day: 25
        }
    ];
}
