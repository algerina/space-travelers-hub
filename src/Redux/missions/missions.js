/* eslint-disable no-unused-vars */
const ADD_MISSION = 'space-travelers-hub/books/ADD_MISSION';
// const REMOVE_MISSION = 'space-travelers-hub/books/REMOVE_MISSION';
const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

// export const addMission = (payload) => ({
//   type: ADD_MISSION,
//   payload,
// });

// export const removeMission = (payload) => ({
//   type: REMOVE_MISSION,
//   payload,
// });

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
          },
        });
      });
    });
};

// export const postBook = ({ id, title, category }) => async (dispatch) => {
//   await fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       item_id: id,
//       title,
//       category,
//     }),
//   })
//     .then((res) => res.text())
//     .then((data) => {
//       if (data === 'Created') {
//         dispatch({
//           type: ADD_BOOK,
//           payload: {
//             id,
//             title,
//             category,
//           },
//         });
//       }
//     });
// };

// export const deleteBook = (id) => async () => {
//   await fetch(`${baseUrl}${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({
//       item_id: id,
//     }),
//   });
// };

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    // case REMOVE_BOOK:
    //   return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
