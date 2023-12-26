interface IsPerson {
    name: string;
    age?: number;
    speak(a: string): void;
    spend(a: number): number;
}

export default IsPerson;