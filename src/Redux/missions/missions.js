const ADD_MISSION = 'space-travelers-hub/redux/missions/ADD_MISSION';
const JOIN_MISSION = 'space-travelers-hub/redux/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/redux/missions/LEAVE_MISSION';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => {
      const missions = data.map((e) => {
        const cont = {};
        cont.mission_id = e.mission_id;
        cont.mission_name = e.mission_name;
        cont.description = e.description;
        return cont;
      });
      missions.forEach((e) => {
        dispatch({
          type: ADD_MISSION,
          payload: {
            id: e.mission_id,
            mission_name: e.mission_name,
            description: e.description,
            reserved: false,
          },
        });
      });
    });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: {
    id,
  },
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: {
    id,
  },
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION: {
      return [...state, action.payload];
    }
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload.id) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.payload.id) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
