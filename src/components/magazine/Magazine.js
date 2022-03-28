import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import "./Magazine.scss";

function Magazine() {
  return (
    <div className="container">
      <Header
        title={"📘 The Code Magazine"}
        navList={[
          { href: "blog.html", content: "Blog" },
          { href: "#", content: "Challenges" },
          {
            href: "#",
            content: "Flexbox",
          },
          { href: "#", content: "CSS Grid" },
        ]}
      />
      <article>
        <header className="post-header">
          <h2>The Basic Language of the Web: HTML</h2>

          <img
            src={require("../../img/laura-jones.jpg")}
            alt="Headshot of Laura Jones"
            height="50"
            width="50"
          />

          <p id="author">
            Posted by <strong>Laura Jones</strong> on Monday, June 21st 2027
          </p>

          <img
            src={require("../../img/post-img.jpg")}
            alt="HTML code on a screen"
            width="500"
            height="200"
            className="post-img"
          />
          <button className="like-button">❤️ Like</button>
        </header>

        <p>
          All modern websites and web applications are built using three
          <em>fundamental</em>
          technologies: HTML, CSS and JavaScript. These are the languages of the
          web.
        </p>

        <p>
          In this post, let's focus on HTML. We will learn what HTML is all
          about, and why you too should learn it.
        </p>

        <h3>What is HTML?</h3>
        <p>
          HTML stands for <strong>H</strong>yper<strong>T</strong>ext
          <strong>M</strong>arkup <strong>L</strong>anguage. It's a markup
          language that web developers use to structure and describe the content
          of a webpage (not a programming language).
        </p>
        <p>
          HTML consists of elements that describe different types of content:
          paragraphs, links, headings, images, video, etc. Web browsers
          understand HTML and render HTML code as websites.
        </p>
        <p>In HTML, each element is made up of 3 parts:</p>

        <ol>
          <li className="first-li">The opening tag</li>
          <li>The closing tag</li>
          <li>The actual element</li>
        </ol>

        <p>
          You can learn more at
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            MDN Web Docs
          </a>
          .
        </p>

        <h3>Why should you learn HTML?</h3>

        <p>
          There are countless reasons for learning the fundamental language of
          the web. Here are 5 of them:
        </p>

        <ul>
          <li className="first-li">
            To be able to use the fundamental web dev language
          </li>
          <li>
            To hand-craft beautiful websites instead of relying on tools like
            Worpress or Wix
          </li>
          <li>To build web applications</li>
          <li>To impress friends</li>
          <li>To have fun 😃</li>
        </ul>

        <p>Hopefully you learned something new here. See you next time!</p>
      </article>

      <Aside
        title={"Related posts"}
        postList={[
          {
            imgSrc: "related-1.jpg",
            imgAlt: "Person programming",
            linkHref: "#",
            linkContent: "How to Learn Web Development",
            pContent: "By Jonas Schmedtmann",
          },
          {
            imgSrc: "related-2.jpg",
            imgAlt: "Lightning",
            linkHref: "#",
            linkContent: "The Unknown Powers of CSS",
            pContent: "By Jim Dillon",
          },
          {
            imgSrc: "related-3.jpg",
            imgAlt: "JavaScript code on a screen",
            linkHref: "#",
            linkContent: "Why JavaScript is Awesome",
            pContent: "By Matilda",
          },
        ]}
      />

      <Footer copyright={"Copyright © 2027 by The Code Magazine."} />
    </div>
  );
}

export default Magazine;
