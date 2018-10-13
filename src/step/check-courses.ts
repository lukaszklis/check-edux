import * as puppeteer from "puppeteer";
import { CrawlerDataDto } from "../model/dto/crawler-data-dto";

export async function checkCourses(
    page: puppeteer.Page,
    data: CrawlerDataDto
): Promise<void> {
    const { courseSections, courseElements } = await page
        .evaluate(() => ({
            courseElements: Array.from(
                document.querySelectorAll(
                    '[id^="ctl00_ContentPlaceHolder1_grdNoweElementy_ctl00__"'
                )
            )
                .filter((course: HTMLElement) =>
                    course.textContent.includes("New")
                )
                .map((course: HTMLElement) => course.innerHTML.trim()),
            courseSections: Array.from(
                document.querySelectorAll(
                    "#ctl00_ContentPlaceHolder1_grdNoweElementy_ctl00 th.rgHeader"
                )
            ).map((course: HTMLElement) => course.textContent)
        }))
        .catch(() => Promise.reject(new Error("Cannot check courses")));

    data.courseElements = courseElements;
    data.courseSections = courseSections;
}
