# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: smoke\loginmultiuser.spec.js >> Login to Application with 2
- Location: tests\smoke\loginmultiuser.spec.js:9:5

# Error details

```
TypeError: loginPage.logintoApplication is not a function
```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic [ref=f2e4]: Swag Labs
  - main [ref=f2e5]:
    - form "Login" [ref=f2e9]:
      - textbox "Username" [ref=f2e11]
      - textbox "Password" [ref=f2e13]
      - button "Login" [ref=f2e15] [cursor=pointer]
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
  3  | 
  4  | import multiuserdata from '../../test-data/multiuserdata.json'
  5  | 
  6  | // Running loop to capture each data 
  7  | for (const user of multiuserdata )
  8  | {
  9  | test(`Login to Application with ${user.id}`,async ({page},loginPage) =>
  10 | {
  11 | 
  12 |     //Creating object of Login Page to perform the actions
  13 | 
  14 |     await page.goto("https://www.saucedemo.com/")
  15 | 
  16 |     console.log(`Userdata used is ${user.username} and ${user.password}`)
  17 | 
> 18 |     await loginPage.logintoApplication(user.username,user.password)
     |                     ^ TypeError: loginPage.logintoApplication is not a function
  19 | 
  20 |     //Checking expect for error message
  21 | 
  22 |     expect(await loginPage.geterrorMessage()).toBe(user.message)
  23 | 
  24 | 
  25 | }
  26 | 
  27 | )
  28 | }
```