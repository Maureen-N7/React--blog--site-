
import Article from "./Article";

// ArticleList Component
// Displays a list of blog articles.
// Receives an array of posts through props and uses map() to render an Article component for each post.
// Connected to: App.jsx and Article.jsx.

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
