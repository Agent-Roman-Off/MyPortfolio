// import { useState, useEffect } from 'react';
// import axios from 'axios';
import Item from './Item';
import SHome from './style';

function Home() {
  // const [projectList, setProjectList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/projects`)
  //     .then((res) => res.data)
  //     .then((data) => {
  //       setProjectList(data);
  //     })
  //     .catch((err) => {
  //       setProjectList('Woops, there isnt anything here yet...');
  //       console.log(err);
  //     });
  // }, []);
  return (
    <SHome>
      <ul className="projectList">
        {/* MAP
        {projectList.map((project) => (
          <li
            className="projectItem"
            key={project.id}
            title={project.title}
            description={project.description}
          >
            <Item />
          </li>
        ))} */}

        {/* TEST */}
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </SHome>
  );
}

export default Home;
