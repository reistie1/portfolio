import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a href="about_me">About Me</a>
        <a href="languages-frameworks">Languages/Frameworks</a>
        <a href="projects">Projects</a>
      </header>
      <div className="picture-frame">
        <div className="picture">
        </div>
        <section className="person-name-section">
          <p className="person-name">Josh Reist</p>
        </section>
      </div>
      <div>
        <section>
          <h2 id="about_me">About Me</h2>
          <p>Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.Loren ipsum something is written here.</p>
        </section>
      </div>
      <div>
        <h2 id="languages-frameworks">Languages/Frameworks</h2>
        <section className="language-wrapper">
          <div className="language-item">
            <h3>Javascript</h3>
          </div>
          <div className="language-item">
            <h3>HTML5</h3>
          </div>
          <div className="language-item">
            <h3>CSS3</h3>
          </div>
          <div className="language-item">
            <h3>C#</h3>
          </div>
          <div className="language-item">
            <h3>Azure</h3>
          </div>
          <div className="language-item">
            <h3>Reactjs</h3>
          </div>
          <div className="language-item">
            <h3>SQL</h3>
          </div>
          <div className="language-item">
            <h3>UML</h3>
          </div>
          <div className="language-item">
            <h3>MangoDB</h3>
          </div>
          <div className="language-item">
            <h3></h3>
          </div>
        </section>
      </div>
      <div>
        <section>
          <h2 id="projects">Projects</h2>
        </section>
      </div>
    </div>
  );
}

export default App;
