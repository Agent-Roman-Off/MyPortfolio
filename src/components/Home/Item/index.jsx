import { PropTypes } from 'prop-types';
import SProject from './style';

function Project({ title, picture }) {
  return (
    <SProject>
      <div className="projectCont">
        <div className="picContainer">
          <img className="picture" src={picture} alt={title} />
        </div>
        <p className="projectTitle">{title}</p>
      </div>
    </SProject>
  );
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};
export default Project;
