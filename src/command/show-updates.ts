import chalk from "chalk";
import * as figures from "figures";
import { CrawlerDataDto } from "../model/dto/crawler-data-dto";
import { eduxUrl } from "../config/edux";
import { mapCourses } from "../helper/course-helper";

export function showUpdates(crawlerData: CrawlerDataDto): void {
    const { courseElements, courseSections } = crawlerData;
    const updatedCourses = mapCourses(courseElements, courseSections).filter(
        course => course.updatedSections.length > 0
    );

    if (updatedCourses.length === 0) {
        console.log(chalk.green(`\n   No new updates! ${chalk.red(figures.heart)}`));
        return;
    } else {
        console.log(`\n   ${chalk.yellow("New updates found:\n")}`);
    }

    updatedCourses.forEach(course => {
        console.log(
            `   ${chalk.yellow(figures.arrowRight)} ${course.name} ${chalk.cyan(
                `(${course.updatedSections.join(", ")})`
            )}:\n     ${chalk.blue.underline(`${eduxUrl}/${course.link}`)}\n`
        );
    });
}
