/** QuestionType influences how a question is asked and what kinds of answers are possible */

export interface Color {
    name: string;
    color: string;
}

export function getColors(): Array<Color> {
    return [
        { name: "Green", color: "#5a9e52" },
        { name: "Violet", color: "#7843e4" },
        { name: "Magenta", color: "#d93471" },
        { name: "Lime", color: "#bcea61" },
        { name: "Blue", color: "#4a69e5" },
        { name: "Tan", color: "#d4ccca" },
        { name: "Red", color: "#a50b01" },
        { name: "Purple", color: "#b039ed" }
    ];
}
