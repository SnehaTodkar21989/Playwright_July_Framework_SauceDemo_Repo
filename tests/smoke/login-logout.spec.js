import {expect} from "@playwright/test"
import {test} from  "../../fixtures/fixture.js"
import userdata from '../../test-data/userdata.json'

test("Login Logout Test",async({page,loginPage,dashboardPage})=>

 {
    await page.goto("")

    console.log("Inside Login Logout Spec page")
    console.log(`Userdata used is ${userdata.username} and ${userdata.password}`)

    await loginPage.logintoApplication(userdata.username,userdata.password)

    //Clicking the menu Item on dashboard
    await dashboardPage.openMenu();

    //Click the lougout option 
    await dashboardPage.logOut();



 }




)