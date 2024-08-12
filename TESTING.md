# Testing

## Table of Contents

## Table of Contents

- [Automated Testing](#automated-testing)

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

## Automated Testing - Code Validation

### W3 Validator - HTML

[W3C Validator](https://validator.w3.org/) has been used to ensure the validity of the HTML markup across the project.

- [Index/Home](documentation/images/w3-index.PNG) - No Errors or warnings.
- [Game one](documentation/images/w3-game-one.PNG) - No Errors or warnings.
- [Game two](documentation/images/w3-game-two.PNG) - No Errors or warnings.
- [Game three](documentation/images/w3-game-three.PNG) - No Errors or warnings.
- [games](documentation/images/w3-games.PNG) - No Errors or warnings.
- [Contact form](documentation/images/w3-contact-form.PNG) - No Errors or warnings.
- [Contact response](documentation/images/w3-response.PNG) - No Errors or warnings.

### W3 Jigsaw - CSS

- [Style CSS](documentation/images/w3-jigsaw-style.PNG) - CSS for All pages.
- No Errors or issues
- Warnings have been ignored, no impact on website functionality.

- [Game one CSS](documentation/images/w3-jigsaw-game-one.PNG) - CSS for Game one.
- No Errors or issues
- Warnings have been ignored, no impact on website functionality.

- [Game two CSS](documentation/images/w3-jigsaw-game-two.PNG) - CSS for Game two.
- Issue and Resolution.
- No Errors or issues

- [Game three CSS](documentation/images/w3-jigsaw-game-three.PNG)  - CSS for Game three.
- Issue and Resolution.
- No Errors or issues

### JShint - Javascript

[JSHint](https://jshint.com/) has been used to validate my JavaScript.

[JSHint - game one](documentation/images/jshint-game-one.PNG) - Passed with No errors, warnings ignored due to it having no effect on the games perfomance.

[JSHint - game two](documentation/images/jshint-game-two.PNG) - Passed with No errors, warnings ignored due to it having no effect on the games perfomance.

[JSHint - game three](documentation/images/jshint-game-three.PNG) - Passed with No errors or warnings.

- Most warnings are relating to Unused variables which are of no consequence to the websites overall performance.

## Performance Testing

### Google Dev tools - Lighthouse

- The performance of the website was tested using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse).

[Index Page](documentation/images/lh-index.png)

[Games Page](documentation/images/lh-games.png)

[Game 1 Page](documentation/images/lh-game-one.png)

[Game 2 Page](documentation/images/jshint-game-two.PNG)

[Game 3 Page](documentation/images/w3-game-three.PNG)

[Contact Us Page](documentation/images)

[Response Page](documentation/images)

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
  - **Fix:** No permenant fix has been implemented as of yet, temporary workaround has been added to allow players to reset the board peices.