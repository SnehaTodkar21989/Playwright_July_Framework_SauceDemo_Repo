import { BasePage} from  "./BasePage"

export class LoginPage extends BasePage
{

//All the locators will be inside constructor    
constructor(page)
{
    //Calling base class constructor since we are importing page from Base class
    super(page)

    this.page=page

    this.usernameInput=page.getByPlaceholder("Username")

    this.passwordInput=page.getByPlaceholder("Password")
    
    this.loginButton=page.getByRole('button',{name:"Login"})

    //this.errorMessage=page.locator('[data-test="error"]')--- XPath loaction
    //Playwright inbuilt locators 
    this.errorMessage=page.getByRole('alert')
    
   
    
}

//All actions related to application will be under method
async logintoApplication(username,password)
{
await this.type(this.usernameInput,username)
await this.type(this.passwordInput,password)
await this.click(this.loginButton)

}

//Creating function to handle error message
async geterrorMessage()
{
return await this.getText(this.errorMessage);

}


}
