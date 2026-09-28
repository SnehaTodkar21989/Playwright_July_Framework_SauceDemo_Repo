import{test as base} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import {DashboardPage} from "../pages/DashboardPage.js"


export const test =base.extend
(
{
loginPage: async({page},use)=>

    {
//Setting up fixture for login 
console.log("Inside Login Page fixture")
const login = new LoginPage(page)

//Using the object created of Login Page . use is bridge between the before set up and after set up activity
await use(login);

},

//Creating fixture for dashboard page
dashboardPage: async({page},use)=>
    {
//Setting up fixture for dashboard 
console.log("Inside Dashboard Page fixture")
const dashboard = new DashboardPage(page)

//Using the object created of Login Page . use is bridge between the before set up and after set up activity
await use(dashboard);

}
}
);
