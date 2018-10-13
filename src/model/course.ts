export class Course {
    constructor(
        public readonly name: string,
        public readonly link: string,
        public readonly updatedSections: string[]
    ) {}
}
