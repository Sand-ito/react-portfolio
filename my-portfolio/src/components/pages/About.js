import React from 'react';

const styles = {
  container: {
      height: "43vh",  
  },
};

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <article className="column ">
        <p className="me-text">
          Hi! My name is Josh Livak. I have only been coding for a month, but I have
          a really good teacher. Here are my most proud websites, so far. I hope you enjoy them! I plan to replace
          them with something more impressive each week.
        </p>
        <p className="me-text">
          Before coding I was a jack of all traits. I worked as an EMT, raft guide, prep cook, a day care worker, and
          plenty more.
          Most of these jobs were to mainly allow me to be a ski and whitewater bum. But I have had my fill of fun
          and now I want to persue a career. I was at the right place and right time to hear about a coding boot camp. I am really
          enjoying the progression of the class at the moment. I also am happy to be in a career path that
          requires even more learning after.
        </p>

        <p className="me-text" style={styles.container}>
          Thank you for taking your time to read and interact with my portfolio. It means a lot to me. Have a nice
          day.
        </p>
      </article>
    </div>
  );
}
