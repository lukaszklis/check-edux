export function isColumnUpdated(column: string): boolean {
    return column.includes("New");
}

export function getEduxColumns(courseElement: string): string[] {
    return courseElement
        .split("</td>")
        .map(line => line.replace(/<td>/g, ""))
        .filter(Boolean);
}

export function hasUpdatedEduxColumns(courseElement: string): boolean {
    return getEduxColumns(courseElement).some(column =>
        isColumnUpdated(column)
    );
}
