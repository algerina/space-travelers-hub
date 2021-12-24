/* eslint-disable camelcase, react/no-unused-prop-types, max-len */
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/missions/missions';
import './mission.css';

const Mission = (props) => {
  const { id, mission_name, description } = props;
  const dispatch = useDispatch();

  const missionStatus = useSelector((state) => state.missionsReducer).filter(
    (e) => e.id === id,
  );

  const clickJoinMission = (mission) => {
    dispatch(joinMission(mission));
  };

  const clickLeaveMission = (mission) => {
    dispatch(leaveMission(mission));
  };

  return (
    <div className="col-12 row mission-container my-1 no-md-margin-y">
      <div className="col-12 col-md-2 border border-md-top-0 border-bottom-0 border-secondary no-border-1 bold-letter">
        {mission_name}
      </div>
      <div className="col-12 col-md-6 border border-secondary no-border-1">
        {description}
      </div>
      <div className="col-6 col-md-2 border border-end-0 border-top-0 border-secondary hstack justify-content-center">
        {missionStatus[0].reserved && (
          <span className="membership-status-active ">ACTIVE MEMBER</span>
        )}
        {!missionStatus[0].reserved && (
          <span className="membership-status">NOT A MEMBER</span>
        )}
      </div>
      <div className="col-6 col-md-2 border border-top-0 border-secondary hstack justify-content-center py-1">
        {missionStatus[0].reserved && (
          <button
            onClick={() => clickLeaveMission(id)}
            className="leave-mission-button "
            type="button"
          >
            Leave Mission!
          </button>
        )}
        {!missionStatus[0].reserved && (
          <button
            onClick={() => clickJoinMission(id)}
            className="join-mission-button"
            type="button"
          >
            Join Mission!
          </button>
        )}
      </div>
    </div>
  );
};

Mission.propTypes = {
  id: PropTypes.string.isRequired,
  mission_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
