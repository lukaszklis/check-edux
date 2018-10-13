import { mapCourses } from "../../src/helper/course-helper";

describe("mapCourses", () => {
    let sections: string[] = [];

    beforeEach(() => {
        sections = [
            "Edycja",
            "Course",
            "Books",
            "FAQ",
            "Tasks folders",
            "Forum",
            "Calendar",
            "Lessons",
            "WWW",
            "Materials",
            "Working folder",
            "Grades",
            "Announcements",
            "Quiz",
            "Pages",
            "Tests",
            "Lectures",
            "Tasks"
        ];
    });

    it("returns an array of updated sections", () => {
        const courseElement =
            "<tr>\n" +
            "\t\t<td>1</td>" +
            '<td><a title="Analysis (AM) - internet based studies" href="req.aspx?id=3222">Analysis (AM) - internet based studies</a></td>' +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>New</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>New</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>\n" +
            "\t</tr>";

        mapCourses([courseElement], sections).forEach(course => {
            expect(course.name).toEqual(
                "Analysis (AM) - internet based studies"
            );
            expect(course.link).toEqual("req.aspx?id=3222");
            expect(course.updatedSections).toEqual(["Forum", "Grades"]);
        });
    });

    it("returns an empty array when no sections were updated", () => {
        const courseElement =
            "<tr>\n" +
            "\t\t<td>1</td>" +
            '<td><a title="Analysis (AM) - internet based studies" href="req.aspx?id=3222">Analysis (AM) - internet based studies</a></td>' +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>\n" +
            "\t</tr>";

        expect(mapCourses([courseElement], sections)).toEqual([]);
    });
});
