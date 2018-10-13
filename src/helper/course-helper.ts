import {
    getEduxColumns,
    hasUpdatedEduxColumns,
    isColumnUpdated
} from "./column-helper";
import { Course } from "../model/course";

function getCourseName(courseElement: string): string {
    return getEduxColumns(courseElement)[1]
        .replace(/<a[^>]*>|<\/a>/g, "")
        .trim();
}

function getCourseLink(courseElement: string): string {
    return getEduxColumns(courseElement)[1].match(/req\.aspx\?id=\d+/g)[0];
}

function getUpdatedSections(
    courseElement: string,
    courseSections: string[]
): string[] {
    const sections = new Map<number, string>();

    courseSections.forEach((courseSection, index) =>
        sections.set(index, courseSection)
    );

    return [
        ...getEduxColumns(courseElement)
            .map(
                (column, index) =>
                    isColumnUpdated(column) && sections.get(index)
            )
            .filter(Boolean)
    ];
}

export function mapCourses(
    courseElements: string[],
    courseSections: string[]
): Course[] {
    return courseElements
        .map(courseElement => {
            return courseElement
                .replace(/<tr[^>]*>/g, "<tr>")
                .replace(/<td[^>]*>/g, "<td>");
        })
        .filter(courseElement => hasUpdatedEduxColumns(courseElement))
        .map(
            courseElement =>
                new Course(
                    getCourseName(courseElement),
                    getCourseLink(courseElement),
                    getUpdatedSections(courseElement, courseSections)
                )
        );
}
