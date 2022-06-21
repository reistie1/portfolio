import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a href="#about_me">About Me</a>
        <a href="#languages-frameworks">Languages/Frameworks</a>
        <a href="#projects">Projects</a>
      </header>
      <div className="picture-frame">
        <div className="picture">
        </div>
        <section className="person-name-section">
          <p className="person-name">Josh Reist</p>
        </section>
      </div>
      <div className="about-me-wrapper">
        <section >
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
            <h3>MangoDB</h3>
          </div>
          <div className="language-item">
            <h3>Nodejs</h3>
          </div>
          <div className="language-item">
            <h3>Typescript</h3>
          </div>
          <div className="language-item">
            <h3>Azure CI/CD</h3>
          </div>
        </section>
      </div>
      <div>
        <h2 style={{marginBottom: "1rem"}}>Projects</h2>
        <section className="project-item">
          <h4 id="projects">Algorithms</h4>
          <div className="project-img-wrapper">
            <div className="project-img">
            </div>
            <div className="project-information">
              <p>Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.</p>
            </div>
          </div>
        </section>
        <section className="project-item">
          <h4 id="projects">Retailer App</h4>
          <div className="project-img-wrapper">
            <div className="project-img">
            </div>
            <div className="project-information">
              <p>Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.</p>
            </div>
          </div>
        </section>
        <section className="project-item">
          <h4 id="projects">Scout Stat V2</h4>
          <div className="project-img-wrapper">
            <div className="project-img">
            </div>
            <div className="project-information">
              <p>Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.</p>
            </div>
          </div>
        </section>
        <section className="project-item">
          <h4 id="projects">Production App</h4>
          <div className="project-img-wrapper">
            <div className="project-img">
            </div>
            <div className="project-information">
              <p>Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.Loren ipsum something long description.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
