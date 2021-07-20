import React from 'react';

export default function Works() {
  return (
    <div>
      <h1>Works</h1>
      <nav className="column">
            <div>
                <div className="container">
                    <a href="https://sand-ito.github.io/password-generator/" className="box1 column">
                        <div>Password Generator</div>
                        <img src='images/password-gen.jpg'/>
                    </a>
                    <li><a href="https://github.com/Sand-ito/password-generator">Repo: Password Gen.</a></li>
                    <a href="https://sand-ito.github.io/day-planner/" className="box2 column">
                        <div>Day Planner</div>
                        <img src='images/day-planner.jpg'/>
                    </a>
                    <li><a href="https://github.com/Sand-ito/day-planner">Repo: Day Planner</a></li>
                </div>
                <a href="https://huirayj.github.io/random-meal-generator/" className="box3 column">
                    <div>Group project, Random Meal Generator</div>
                    <img src='images/rmg-proj.jpg'/>
                </a>
                <ul className="container">
                    <li><a href="https://github.com/huirayj/random-meal-generator">Repo: Meal Gen</a></li>
                </ul>
            </div>
        </nav>
    </div>
  );
}
