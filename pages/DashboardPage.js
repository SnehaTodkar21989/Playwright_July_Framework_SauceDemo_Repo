import{BasePage} from './BasePage.js'

export class DashboardPage extends BasePage
{
constructor (page)
{
super(page)

this.page=page

this.openMenuItem=page.getByRole('button',{name:"Open Menu"})

this.logOutOption=page.getByRole('button',{name:"Logout"})


}

//Clicking the Open Menu On Dashboard
async openMenu()
{
    await this.click(this.openMenuItem)
}

//Clicking the Logout Option On Dashboard
async logOut()
{
    await this.click(this.logOutOption)
}

}