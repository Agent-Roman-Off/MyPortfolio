import { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Item';
import SHome from './style';

function Home() {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5050/projects`)
      .then((res) => res.data)
      .then((data) => {
        setProjectList(data);
      })
      .catch((err) => {
        setProjectList('Woops, there isnt anything here yet...');
        console.log(err);
      });
  }, []);
  return (
    <SHome>
      <div className="listCont">
        <h3 className="date">-- 2022 --</h3>
        <ul className="projectList">
          {projectList.map((project) => (
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
