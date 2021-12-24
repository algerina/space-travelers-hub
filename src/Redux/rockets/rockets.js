/* eslint-disable  prefer-destructuring */
const BOOK_ROCKET = 'space-travelers-hub/redux/rockets/BOOK_ROCKET';
const CANCEL_RESERVATION = 'space-travelers-hub/redux/rockets/CANCEL_RESERVATION';
const ADD_ROCKET = 'space-travelers-hub/redux/rockets/ADD_ROCKET';

const API = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

// const AddRocket = async () => {
//   const rocketData = await fetch(API);
//   const data = await rocketData.json();
//   return data;
// };

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  payload: {
    id,
  },
});

export const addRocket = (id) => ({
  type: ADD_ROCKET,
  payload: {
    id,
  },
});

export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: {
    id,
  },
});

export const fetchRockets = () => async (dispatch) => {
  await fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const rockets = data.map((element) => {
        const info = {};
        info.rocket_id = element.rocket_id;
        info.rocket_name = element.rocket_name;
        info.description = element.description;
        info.rocket_image = element.flickr_images[0];
        return info;
      });

      rockets.forEach((element) => {
        dispatch({
          type: BOOK_ROCKET,
          payload: {
            id: element.rocket_id,
            rocket_name: element.rocket_name,
            description: element.description,
            rocket_image: element.rocket_image,
            reserved: false,

          },
        });
      });
    });
};
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ROCKET: {
      return [...state, action.payload];
    }
    case ADD_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.playload.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};
// case CANCEL_ROCKET: {
//   const newState = state.map((rocket) => {
//     if (rocket.id !== action.payload) {
//       return rocket;
//     }
//     return { ...rocket, reserved: false };
//   });
//   return newState;
// }
// default:
//   return state;
export default rocketReducer;
