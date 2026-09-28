import {test} from '@playwright/test';

export class BasePage 
{
  constructor(page) 
  {
    this.page = page;
  }


//Navigating to URL
async navigateToApplication(url)
{
    await this.page.goto(url);

}

//Fill function
async type(selector,text)
{
    await selector.fill(text)
}

//Click function
async click(selector)
{
    await selector.click()
}

//Getting error message
async getText(selector)
{
  return await selector.textContent()
}


}