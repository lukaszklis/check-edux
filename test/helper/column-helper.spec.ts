import { hasUpdatedEduxColumns } from "../../src/helper/column-helper";

describe("hasUpdatedEduxColumns", () => {
    it('returns "true" whenever there are any updates', function() {
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
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>" +
            "<td>&nbsp;</td>\n" +
            "\t</tr>";

        expect(hasUpdatedEduxColumns(courseElement)).toBeTruthy();
    });

    it('returns "false" whenever there are no updates', function() {
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

        expect(hasUpdatedEduxColumns(courseElement)).toBeFalsy();
    });
});
