import * as puppeteer from "puppeteer";
import * as Listr from "listr";
import * as listrInput from "listr-input";
import chalk from "chalk";
import {
    getLogin,
    getPassword,
    hasCredentials,
    storeEncryptedValue,
    storeValue
} from "../helper/store-helper";
import { eduxTimeout, eduxUrl } from "../config/edux";
import {
    announcementsCountKey,
    storeLoginKey,
    storePasswordKey
} from "../config/store";
import { validateLogin } from "../validator/login-validator";

export function login(page: puppeteer.Page): Listr {
    return new Listr([
        {
            skip: () => hasCredentials(),
            title: "Setting defaults",
            task: () => storeValue<number>(announcementsCountKey, 0)
        },
        {
            skip: () => hasCredentials(),
            title: "Enter your username",
            task: () =>
                listrInput("username", {
                    secret: false,
                    validate: value => validateLogin(value),
                    done: username =>
                        storeEncryptedValue(storeLoginKey, username)
                })
        },
        {
            skip: () => hasCredentials(),
            title: "Enter your password",
            task: () =>
                listrInput("password", {
                    secret: true,
                    done: password =>
                        storeEncryptedValue(storePasswordKey, password)
                })
        },
        {
            skip: () => !hasCredentials(),
            title: `Logging in ${
                hasCredentials() ? `as ${chalk.cyan(getLogin())}` : ""
            }`,
            task: async () => {
                await page.goto(`${eduxUrl}/Login.aspx`);
                await page.waitForSelector("table.login_form");
                await page.type(
                    "#ctl00_ContentPlaceHolder1_Login1_UserName",
                    getLogin()
                );
                await page.type(
                    "#ctl00_ContentPlaceHolder1_Login1_Password",
                    getPassword()
                );
                await page.click(
                    "#ctl00_ContentPlaceHolder1_Login1_LoginButton"
                );
                await page
                    .waitForSelector(
                        "#ctl00_ContentPlaceHolder1_grdNoweElementy",
                        { timeout: eduxTimeout }
                    )
                    .catch(() =>
                        Promise.reject(new Error("Cannot login to EDUX"))
                    );
            }
        }
    ]);
}
