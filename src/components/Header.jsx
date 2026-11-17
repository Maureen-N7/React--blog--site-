// Header Component
// Displays the name of the personal blog.
// Receives the blog name through props.
// Connected to: App.jsx.

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
