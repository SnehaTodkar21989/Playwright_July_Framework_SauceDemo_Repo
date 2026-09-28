# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\login-logout.spec.js >> Login Logout Test
- Location: tests\smoke\login-logout.spec.js:5:5

# Error details

```
TypeError: dashboardPage.openMenu is not a function
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic [ref=f2e4]: Swag Labs
  - main [ref=f2e5]:
    - form "Login" [ref=f2e9]:
      - textbox "Username" [ref=f2e11]: standard_user
      - textbox "Password" [ref=f2e13]: secret_sauce
      - button "Login" [active] [ref=f2e15] [cursor=pointer]
    - generic [ref=f2e17]:
      - generic [ref=f2e18]:
        - heading "Accepted usernames are:" [level=4] [ref=f2e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=f2e20]:
        - heading "Password for all users:" [level=4] [ref=f2e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import {expect} from "@playwright/test"
  2  | import {test} from  "../../fixtures/fixture.js"
  3  | import userdata from '../../test-data/userdata.json'
  4  | 
  5  | test("Login Logout Test",async({page,loginPage,dashboardPage})=>
  6  | 
  7  |  {
  8  |     await page.goto("")
  9  | 
  10 |     console.log("Inside Login Logout Spec page")
  11 |     console.log(`Userdata used is ${userdata.username} and ${userdata.password}`)
  12 | 
  13 |     await loginPage.logintoApplication(userdata.username,userdata.password)
  14 | 
  15 |     //Clicking the menu Item on dashboard
> 16 |     await dashboardPage.openMenu()
     |                         ^ TypeError: dashboardPage.openMenu is not a function
  17 | 
  18 |     //Click the lougout option 
  19 |     await dashboardPage.logOut()
  20 | 
  21 | 
  22 | 
  23 |  }
  24 | 
  25 | 
  26 | 
  27 | 
  28 | )
```