# Personal Blog Website

## Project Description

This is a personal blog website built using React and Vite. The project demonstrates the use of reusable components, JSX, props, and component relationships.

## Features

- Displays the blog name.
- Shows an About section with a blog image and description.
- Displays multiple blog articles.
- Uses reusable React components.
- Passes information between components using props.

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- CSS
- Vitest

## Component Descriptions and Relationships

### Header.jsx

Displays the blog name using the name prop. It is connected to App.jsx.

### About.jsx

Displays the blog image and introduction using the image and about props. It is connected to App.jsx.

### Article.jsx

Displays an individual article's title, date, and preview. It is connected to ArticleList.jsx.

### ArticleList.jsx

Displays multiple articles by mapping through the posts array. It is connected to App.jsx and renders Article.jsx components.

### App.jsx

Acts as the main component that connects Header, About, and ArticleList.

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── About.jsx
│   ├── Article.jsx
│   └── ArticleList.jsx
├── tests/
│   └── App.test.jsx
├── blog.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Installation and Setup

1. Clone the project repository.

2. Navigate into the project folder:

   `cd React`

3. Install the project dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal.

## Running Tests

To run the project tests:

`npm test`

## Building the Project

To create a production build:

`npm run build`

## Code Comments

Each component includes comments explaining its functionality and its relationship with other components.

##
