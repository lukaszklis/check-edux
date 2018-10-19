import * as storeHelper from "../../src/helper/store-helper";
import { hasNewAnnouncements } from "../../src/helper/announcement-helper";

describe("hasNewAnnouncements", () => {
    it('returns "true" whenever the store announcement count differs', function() {
        jest.spyOn(storeHelper, "getStoredValue").mockReturnValue(0);

        expect(hasNewAnnouncements(2)).toBeTruthy();
    });

    it('returns "false" whenever the store announcement count is equal', function() {
        jest.spyOn(storeHelper, "getStoredValue").mockReturnValue(2);

        expect(hasNewAnnouncements(2)).toBeFalsy();
    });
});
