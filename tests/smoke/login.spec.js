import {test,expect} from "@playwright/test"
import {LoginPage} from  '../../pages/LoginPage.js'
import userdata from '../../test-data/userdata.json'

test("Login to Application",async ({page}) =>
{

    //Creating object of Login Page to perform the actions

    const login = new LoginPage(page)

    await page.goto("https://www.saucedemo.com/")

    console.log(`Userdata used is ${userdata.username} and ${userdata.password}`)

    await login.logintoApplication(userdata.username,userdata.password)


}


)