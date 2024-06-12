# Project Work: Project Layout

## Step One: Study the Available Components

[Project layout](https://www.figma.com/file/FEeiiGLOsE7ktXbPpBxYoD/Custom-dropdown?type=design&node-id=0%3A1&mode=design&t=eXRJnWC6Xsuw0qR4-1)

To run Storybook, execute the following command:

```bash
npm run storybook

```
To run the style linter, execute the following command:

npm run stylelint


```
npm run lint
```

To run the formatter, execute the following command:

```
npm run format
```

### Functional Requirements

- When you click on the “arrow”, a sidebar with settings opens; when you click again or click outside, the sidebar closes.
- When changing settings in the sidebar, they are not applied immediately.
- After clicking “apply” the styles are applied to the article.
- When you click “reset,” the settings in the form are reset to the initial ones that were when the page was opened, and the styles are applied to the article.
- Settings are set through CSS variables, which are already in the styles and are set to default values ​​in the code.

## Step Two: Form Implementation

Consider the following points before starting to code:

- how the composition will be organized,
- where you will store the state,
- how to transfer data between the form and the page.

After this, implement the form from the available components according to the layout.


## Step three. Ensure data transfer between form and page

Implement saving page state and form state separately. Ensure that the new state is applied after clicking “apply”.