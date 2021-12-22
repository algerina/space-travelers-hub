/* eslint-disable no-unused-vars */
// const ADD_MISSION = 'space-travelers-hub/books/ADD_MISSION';
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
      console.log(data);

      // const fetchCollection = [];
      // Object.entries(data).forEach((entry) => {
      //   const key = entry[0];
      //   const value = entry[1];
      //   const book = { id: `${key}`, title: value[0].title, category: value[0].title };
      //   fetchCollection.push(book);
      // });
      // fetchCollection.forEach((e) => {
      //   dispatch({
      //     type: ADD_BOOK,
      //     payload: {
      //       id: e.id,
      //       title: e.title,
      //       category: e.category,
      //     },
      //   });
      // });
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
    // case ADD_BOOK:
    //   return [...state, action.payload];
    // case REMOVE_BOOK:
    //   return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
