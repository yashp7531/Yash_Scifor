// Importing React and useState from react
import React, { useState } from "react";
import "./App.css"; // Import the CSS file for additional styling

const HeadingParagraph = () => {
  // State to manage the heading and paragraphs
  const [content, setContent] = useState({
    heading: "Class Component",
    paragraphs: [
      "This is a simple example of a React functional component that renders a heading and paragraphs. Using inline styles, we can apply custom designs directly to the elements.",
      "React components allow developers to break down the UI into reusable pieces, making the code more manageable and scalable. By combining JavaScript and HTML-like syntax, React provides a seamless way to build interactive user interfaces.",
      "In this example, we used inline styles to define the look and feel of the heading and paragraphs. However, developers can also use CSS classes or external libraries like styled-components for more complex styling needs.",
    ],
  });

  // Inline styles for the updated layout
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "800px",
      margin: "20px auto",
    },
    heading: {
      fontSize: "2.8rem",
      color: "blue",
      textAlign: "center",
      margin: "20px 0",
      fontWeight: "bold",
      textShadow: "1px 1px 3px lightgray",
    },
    paragraph: {
      fontSize: "1.4rem",
      color: "black",
      lineHeight: "1.8",
      textAlign: "justify",
      margin: "10px 0",
      padding: "0 15px",
      fontFamily: "Arial, sans-serif",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>{content.heading}</h1>
      {content.paragraphs.map((text, index) => (
        <p key={index} style={styles.paragraph}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default HeadingParagraph;
