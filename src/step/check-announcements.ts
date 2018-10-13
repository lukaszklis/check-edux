import * as puppeteer from "puppeteer";
import { CrawlerDataDto } from "../model/dto/crawler-data-dto";

export async function checkAnnouncements(
    page: puppeteer.Page,
    data: CrawlerDataDto
): Promise<void> {
    const { announcementRowsCount } = await page
        .evaluate(() => ({
            announcementRowsCount: document.querySelectorAll(
                "tr[id^=ctl00_ContentPlaceHolder1_grdOgloszeniaOgolne_ctl00__]"
            ).length
        }))
        .catch(() =>
            Promise.reject(new Error("Cannot check global announcements"))
        );

    data.announcementRowsCount = announcementRowsCount;
}
