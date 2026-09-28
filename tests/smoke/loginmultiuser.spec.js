import {expect} from "@playwright/test"
import {test} from  "../../fixtures/fixture.js"

import multiuserdata from '../../test-data/multiuserdata.json'

test.describe("Multiple user test",{tags:'@login'},()=>{
// Running loop to capture each data 
for (const user of multiuserdata )
{
test(`Login to Application with ${user.id}`,async ({page,loginPage}) =>
{

    //Creating object of Login Page to perform the actions

    await page.goto("")

    console.log(`Userdata used is ${user.username} and ${user.password}`)

    await loginPage.logintoApplication(user.username,user.password)

    //Checking expect for error message

    expect(await loginPage.geterrorMessage()).toBe(user.message)


}

)
}
}
)