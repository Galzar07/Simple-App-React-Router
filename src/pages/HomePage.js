import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "czym jest tetote",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat ad tenetur fugit sunt saepe, mollitia dolorum totam numquam animi, magnam illo ullam corrupti aspernatur fugiat minima eligendi blanditiis quae.",
  },
  {
    id: 2,
    title: "Newton",
    author: "Maria Fajna",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat ad tenetur fugit sunt saepe, mollitia dolorum totam numquam animi, magnam illo ullam corrupti aspernatur fugiat minima eligendi blanditiis quae.",
  },
  {
    id: 3,
    title: "simpson",
    author: "Albert Wielki",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quaerat ad tenetur fugit sunt saepe, mollitia dolorum totam numquam animi, magnam illo ullam corrupti aspernatur fugiat minima eligendi blanditiis quae.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
