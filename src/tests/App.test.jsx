
import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

import Header from "../components/Header";
import About from "../components/About";
import Article from "../components/Article";
import ArticleList from "../components/ArticleList";
import App from "../App";

function decodeHTML(html) {
  return html.replace(/&#x27;/g, "'");
}

describe("Blog Components", () => {

  it("displays the blog name in Header", () => {
    const html = renderToStaticMarkup(
      <Header name="Maureen's Blog" />
    );

   expect(decodeHTML(html)).toContain("Maureen's Blog");
  });

  it("displays the image and description in About", () => {
    const html = renderToStaticMarkup(
      <About
        image="logo.png"
        about="Welcome to my blog!"
      />
    );

    expect(html).toContain('src="logo.png"');
    expect(html).toContain("Welcome to my blog!");
  });

  it("displays the article title, date and preview", () => {
    const html = renderToStaticMarkup(
      <Article
        title="My First Post"
        date="November 16, 2026"
        preview="This is my first post."
      />
    );

    expect(html).toContain("My First Post");
    expect(html).toContain("November 16, 2026");
    expect(html).toContain("This is my first post.");
  });

  it("displays all posts in ArticleList", () => {
    const posts = [
      { id: 1, title: "Post One", date: "Nov 10", preview: "First post" },
      { id: 2, title: "Post Two", date: "Nov 11", preview: "Second post" },
      { id: 3, title: "Post Three", date: "Nov 12", preview: "Third post" }
    ];

    const html = renderToStaticMarkup(
      <ArticleList posts={posts} />
    );

    expect(html).toContain("Post One");
    expect(html).toContain("Post Two");
    expect(html).toContain("Post Three");
  });

  it("renders the complete blog in App", () => {
    const html = renderToStaticMarkup(<App />);

    expect(decodeHTML(html)).toContain("Maureen's Personal Blog");
    expect(html).toContain("Welcome to my personal blog!");
    expect(html).toContain("My Journey into Software Engineering");
  });

});
