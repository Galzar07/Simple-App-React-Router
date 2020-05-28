import React from "react";

const Article = ({ title, author, text }) => {
  const styles = {
    marginTop: 40,
  };

  return (
    <article style={styles}>
      <h3
        style={{
          marginBottom: 3,
          textTransform: "uppercase",
        }}
      >
        {title}
      </h3>
      <span
        style={{
          display: "block",
          fontSize: 15,
          marginBottom: 10,
        }}
      >
        {author}
      </span>
      <p>{text}</p>
    </article>
  );
};

export default Article;
