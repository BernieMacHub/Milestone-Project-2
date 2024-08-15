# Testing

![Responsive-Image](documentation/images/cmg-responsive-mockup.png)

---
## Table of Contents

- [Code Validation](#code-validation)

  - [W3 Validator - HTML](#w3-validator---html)
  - [W3 Jigsaw - CSS](#w3-jigsaw---css)
  - [JSHint - Javascript](#jshint---javascript)

- [Performance Testing](#performance-testing)

  - [Lighthouse](#Google-dev-tools---lighthouse)

- [Manual Testing](#manual-testing)

  - [Full Site & Feature Testing](#full-site--feature-testing)

    - [Navigation](#navigation)
    - [Responsiveness](#responsiveness)
    - [Links](#links)
    - [Games](#games)

  - [Browsers](#browser-compatibility)
  - [Device](#device-compatibility)
  - [Bugs](#known-bugs)

    ***

## Code Validation

### W3 Validator - HTML

[W3C Validator](https://validator.w3.org/) has been used to ensure the validity of the HTML markup across the project.

- [Index/Home](documentation/images/w3-index.png) - No Errors or warnings.
- [Game one](documentation/images/w3-game-one.png) - No Errors or warnings.
- [Game two](documentation/images/w3-game-two.png) - No Errors or warnings.
- [Game three](documentation/images/w3-game-three.png) - No Errors or warnings.
- [games](documentation/images/w3-games.png) - No Errors or warnings.
- [Contact form](documentation/images/w3-contact-form.png) - No Errors or warnings.
- [Contact response](documentation/images/w3-response.png) - No Errors or warnings.

### W3 Jigsaw - CSS

- [Style CSS](documentation/images/w3-jigsaw-style.png) - CSS for All pages.
- No Errors or issues
- Warnings have been ignored, no impact on website functionality.

- [Game one CSS](documentation/images/w3-jigsaw-game-one.png) - CSS for Game one.
- No Errors or issues
- Warnings have been ignored, no impact on website functionality.

- [Game two CSS](documentation/images/w3-jigsaw-game-two.png) - CSS for Game two.
- Issue and Resolution.
- No Errors or issues

- [Game three CSS](documentation/images/w3-jigsaw-game-three.png)  - CSS for Game three.
- Issue and Resolution.
- No Errors or issues

### JShint - Javascript

[JSHint](https://jshint.com/) has been used to validate my JavaScript.

[JSHint - game one](documentation/images/jshint-game-one.png) - Passed with No errors, warnings ignored due to it having no effect on the games perfomance.

[JSHint - game two](documentation/images/jshint-game-two.png) - Passed with No errors, warnings ignored due to it having no effect on the games perfomance.

[JSHint - game three](documentation/images/jshint-game-three.png) - Passed with No errors or warnings.

- Most warnings are relating to Unused variables which are of no consequence to the websites overall performance.

## Performance Testing

### Google Dev tools - Lighthouse

- The performance of the website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse).

[Index Page](documentation/images/lh-index.png)

[Games Page](documentation/images/lh-games.png)

[Game 1 Page](documentation/images/lh-game-one.png)

[Game 2 Page](documentation/images/lh-game-two.png)

[Game 3 Page](documentation/images/lh-game-three.png)

[Contact Us Page](documentation/images/lh-contact-form.png)

[Response Page](documentation/images/lh-response.png)

## Manual Testing

### Full Site & Feature Testing

#### Navigation
- **Test:** Ensure that all navigation links are functioning correctly and lead to the appropriate sections.
- **Result:** All navigation links function as expected.

#### Responsiveness
- **Test:** Check the responsiveness of the website across various devices (desktop, tablet, mobile).
- **Result:** The site is fully responsive on all tested devices (The games are indended for tablet device and upwards, the website wil respond accordingly if someone attempts to play on a mobile device)."

#### Links
- **Test:** Verify that all internal and external links are working correctly.
- **Result:** All links are functional and lead to the correct destinations."

#### Games
- **Test:** Tested all completed games to make sure all functions are working correctly.
- **Result:** All Games are functional and working correctly (The Chess game is still underdevelopment and doesnt have any form of winning message or scoreboard functionality at this point)."

### Index, Games, Contact, Response Pages and other universal links

| Feature                  | Expectation                              | Test Performed                          | Outcome                              |
| ------------------------ | ---------------------------------------- | --------------------------------------- | ------------------------------------ |
| CMG Title                | Redirects users to the Home page         | Clicked the Title                       | Expectation Acheived                 |
| Home Nav Link            | Redirects users to the Home page         | Clicked the Home Button                 | Expectation Acheived                 |
| Games Nav Link           | Redirects users to the Games page        | Clicked the Games Button                | Expectation Acheived                 |
| Contact us Nav Link      | Redirects users to the Contact us page   | Clicked the Contact us Button           | Expectation Acheived                 |
| See Games Button         | Redirects users to the Games page        | Clicked the Contact us Button           | Expectation Acheived                 |
| Play Game 1 Button       | Redirects users to Noughts and Crosses   | Clicked the Play Game Button            | Expectation Acheived                 |
| Play Game 2 Button       | Redirects users to Snakes and Ladders    | Clicked the Play Game Button            | Expectation Acheived                 |
| Play Game 3 Button       | Redirects users to Chess                 | Clicked the Play Game Button            | Expectation Acheived                 |
| Submit form Button       | Redirects users to the response page     | Clicked the Sibmit Button               | Expectation Acheived                 |
| Email Link               | Redirects users to their email platform  | Clicked the email Link                  | Expectation Acheived                 |
| Facebook Link            | Redirects users to Facebook              | Clicked the Facebook Icon               | Expectation Acheived                 |
| Linkedin Link            | Redirects users to Linkedin              | Clicked the Linkedin Icon               | Expectation Acheived                 |
| GitHub Link              | Redirects users to GitHub                | Clicked the GitHub Icon                 | Expectation Acheived                 |


### Noughts and Crosses 
| Feature                  | Expectation                              | Test Performed                          | Outcome                              |
| ------------------------ | ---------------------------------------- | --------------------------------------- | ------------------------------------ |
| Game 1 Grid Squares      | Marks Noughts or Crosses on the Board    | Clicked Several Sqaures                 | Expectation Acheived                 |
| Scoreboard               | Updates the Scores after each win        | Won a game as either Noughts or Crosses | Expectation Acheived                 |
| Reset the Scoreboard     | Resets the scoreboard                    | Clicked the reset Scoreboard Button     | Expectation Acheived                 |

### Snakes and Ladders
| Feature                  | Expectation                              | Test Performed                          | Outcome                              |
| ------------------------ | ---------------------------------------- | --------------------------------------- | ------------------------------------ |
| Game 2 Roll Dice         | Moves the marker Pieces on the Board     | Clicked Roll Dice several times         | Expectation Acheived                 |
| Game 2 Go to Scoreboard  | Moves the screen focus to the scoreboard | Clicked the Go to Scoreboard Button     | Expectation Acheived                 |
| Scoreboard               | Updates the Scores after each win        | Won a game as either Red or Blue        | Expectation Acheived                 |
| Reset the Scoreboard     | Resets the scoreboard                    | Clicked the reset Scoreboard Button     | Expectation Acheived                 |

### Chess
| Feature                  | Expectation                              | Test Performed                          | Outcome                              |
| ------------------------ | ---------------------------------------- | --------------------------------------- | ------------------------------------ |
| Game 3 Chess Piece Paths | Shows possible player movements in Green | Clicked Several Chess Pieces            | Expectation Acheived                 |
| Game 3 Chess Piece Moves | Move Chess Pieces around the board       | Clicked one of the green path squares   | Expectation Acheived                 |
| Scoreboard               | Updates the Scores after each win        | Won a game as either Blacks or Whites   | Expectation Acheived                 |
| Reset the Scoreboard     | Resets the scoreboard                    | Clicked the reset Scoreboard Button     | Failed to reload Chess Pieces        |

#### Additional Notes for Manual Testing



### Browser Compatibility

- The website was tested on the following browsers:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
  - Safari

- **Result:** The website performs consistently across all tested browsers.

### Device Compatibility

- The website was tested on the following devices:
  - Desktop (Windows, macOS)
  - Tablet (iPad, Android tablet)
  - Mobile (iPhone, Android phone)

- **Result:** The website displays correctly on all devices tested."

### Known Bugs

- **Bug 1:** There was an issue with the snakes and ladders game, when players landed on the same square, only one marker was visible.
  - **Fix:** It was a simple case of offsetting the marker in the CSS to display them stacked on top of one another.

- **Bug 2:** Chess game doesnt reset properly after a player wins.
  - **Fix:** No permenant fix has been implemented as of yet, temporary workaround has been added to allow players to reset the board peices upon clicking restart.