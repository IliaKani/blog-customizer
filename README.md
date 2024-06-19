# React Blog Customizer

This project is a React application for customizing the blog page through an opening panel. The project is built using TypeScript and Storybook.

[Project layout](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown?type=design&node-id=0%3A1&mode=design&t=eXRJnWC6Xsuw0qR4-1)

## Live Demo

The application is deployed at: [blog-customizer-iliakani.vercel.app](https://blog-customizer-iliakani.vercel.app)

## Installation

To install the project, follow these steps:

1. To run Storybook, execute the following command: `npm run storybook`
2. To run the style linter, execute the following command: `npm run stylelint`
3. To run the formatter, execute the following command: `npm run format`
4. Install the dependencies: `npm install`
4. Start the application: `npm start`

## Usage

- When you click on the “arrow”, a sidebar with settings opens; when you click again or click outside, the sidebar closes.
- When changing settings in the sidebar, they are not applied immediately.
- After clicking “apply” the styles are applied to the article.
- When you click “reset,” the settings in the form are reset to the initial ones that were when the page was opened, and the styles are applied to the article.
- Settings are set through CSS variables, which are already in the styles and are set to default values ​​in the code.
