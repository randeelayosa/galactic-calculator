
# Super Galactic Age Calculator

#### _Front End Development/JavaScript, Week 10 - Independent Project, 3.15.19_

#### By _**Randee Layosa**_

![Dependencies](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

_This program demonstrates an understanding of ES6 features (`import`, `export`, `class`, `extends`, `let`, `const`) to create a calculator capable of computing a User's inputted age as it corresponds to the revolutions around the sun of different planets. This app also utilizes Webpack configurations and dependencies to meet industry standard practices and achieve minimal sized code files._

## Technologies Used

  * _Webpack_
  * _Jasmine_
  * _Karma_
  * _Babel_
  * _JavaScript (ES6)_
  * _Sass_

## Setup/Installation Requirements

#### _To open and view this project file:_
* Clone this GitHub repository https://github.com/randeelayosa/galactic-calculator.git to your Desktop.
* To clone, open your Terminal, enter the command: `cd desktop` , enter the command: `git clone [paste link here]` and then press _Enter_.
* In terminal, navigate to the cloned project file on your Desktop with `cd desktop/[project folder name]`.
* Enter `atom .` if Atom is your preferred text editor. Or, open the folder in a Finder window, select the files you want to view, right click, and select the text editor of your preference.

#### _Installing Webpack_
* To view this app file you must have npm installed on your computer. To do so, go into your home directory and follow the instructions in this link: <a href="https://www.learnhowtoprogram.com/user-interfaces/responsive-design-development-environments/module-bundling-with-webpack">_Webpack Installation Instructions_</a>.
* If you already have npm installed on your computer, in the Terminal go into the project file and enter the commands `npm install`, and then `npm run start`.

## Planning

1. **Configuration/Dependencies**

  | Configuration/Dependencies | Use |
| :-------------     | :------------- |
| Babel-Core, Babel-Loader, Babel-preset-es2015 | compiles JavaScript for compatibility with different browsers |
| Clean-Webpack-Plugin | clears project dist folder |
| CSS-Loader, Style-Loader, Sass-Loader, Node-Sass | styling |
| ESLint, ESLint-loader | JavaScript linter, checks code for errors |
| File-Loader: image loader |
| HTML-Webpack-Plugin | loads HTML file |
| Jasmine, Jasmine-Core, Karma, Karma-Chrome-Launcher, Karma-CLI, Karma-Jasmine, Karma-Jasmine-HTML-Reporter, Karma-jQuery, Karma-Sourcemap-Loader, Karma-Webpack | for testing code |
| UglifyJS-Webpack-Plugin | minifies code |
| Webpack, Webpack-CLI, Webpack-Dev-Server | bundles/compiles code |

2. **Specs**

  | Description | Input | Output |
| :-------------     | :------------- | :------------- |
| Program blocks non-numerical input | g | Invalid input |
| Program disallows form submission if an input field is empty  | click button to Calculate | Field required |
| Program returns user's age | Year born: 1999 | 20 |
| Program calculates and returns user's age on Mercury | 20 | 83 |
| Program calculates and returns user's age on Venus | 20 | 32.5 |
| Program calculates and returns user's age on Mars | 20 | 10.6 |
| Program calculates and returns user's age on Jupiter | 20 | 1.68 |
| Program determines and returns user's remaining life expectancy on Earth | 20 | 59 |
| Program determines and returns user's remaining life expectancy on Mercury  | 83 | 245 |
| Program determines and returns user's remaining life expectancy on Venus  | 32.5 | 95.9 |
| Program determines and returns user's remaining life expectancy on Mars  | 10.6 | 31.4 |
| Program determines and returns user's remaining life expectancy on Jupiter  | 1.68 | 4.97 |
| Program returns the number of years the user has surpassed their life expectancy if they have already surpassed the average amount | (Earth) 80 | 1 |
| Program returns the number of years the user has surpassed their life expectancy on Mercury | 80 | 4 |
| Program returns the number of years the user has surpassed their life expectancy on Venus | 80 | 1.6 |
| Program returns the number of years the user has surpassed their life expectancy on Mars | 80 | 0.5 |
| Program returns the number of years the user has surpassed their life expectancy on Jupiter | 80 | 0.09 |

3. **Integration**
  * src folder: `index.html`, `main.js`, `age.js`
  * spec folder: `age-spec.js`, `jasmine.json`
  * index.html: `<form>` `<input>`
  * Display: input field for user's age and a submit button
  * Integrate feature that calculates user's age, life expectancy, and remaining years in correspondence to other planets.

4. **UX/UI**
  * Include and modify Sass
  * Develop custom style - solar system/space theme

5. **Polish**
  * Refactor testing specs and JS where applicable
  * Delete unused dependencies in `package.json` and plugins in `webpack.config.js`
  * Produce README that fulfills necessary guidelines and requirements

Copyright (c) 2019 **_Randee Layosa_**
