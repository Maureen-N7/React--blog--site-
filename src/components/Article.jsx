// Article Component
// Displays an individual blog post, including its title, date, and preview.
// Receives article information through props.
// Connected to: ArticleList.jsx.


function Article({ title, date, preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
