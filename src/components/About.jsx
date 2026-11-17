// About Component
// Displays the blog logo and an introduction about the blog.
// Receives the image URL and description through props.
// Connected to: App.jsx.

function About({ image, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
