import { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Item';
import SHome from './style';

function Home() {
  // FOR 2022 PROJECTS
  const [project21List, setProject21List] = useState([]);
  const [project22List, setProject22List] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/projects/2022`)
      .then(({ data }) => {
        setProject22List(data);
      })
      .catch((err) => {
        setProject22List('Woops, there isnt anything here yet...');
        console.log(err);
      });
    axios
      .get(`http://localhost:5050/projects/2021`)
      .then(({ data }) => {
        setProject21List(data);
      })
      .catch((err) => {
        setProject21List('Woops, there isnt anything here yet...');
        console.log(err);
      });
  }, []);
  return (
    <SHome>
      {/* 2022 PROJECTS */}
      <div className="listCont">
        <h3 className="date">-- 2022 --</h3>
        <ul className="projectList">
          {project22List.map((project) => (
            <li className="projectItem">
              <Project
                key={project.id}
                title={project.title}
                picture={project.picture}
                date={project.date}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* 2021 PROJECTS */}
      <div className="listCont">
        <h3 className="date">-- 2021 --</h3>
        <ul className="projectList">
          {project21List.map((project) => (
            <li className="projectItem">
              <Project
                key={project.id}
                title={project.title}
                picture={project.picture}
                date={project.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </SHome>
  );
}

export default Home;
