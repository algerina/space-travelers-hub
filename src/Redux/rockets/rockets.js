const BOOK_ROCKET = 'BOOK_ROCKET';
// const CANCEL_ROCKET = 'CANCEL_ROCKET';

const API = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

// const AddRocket = async () => {
//   const rocketData = await fetch(API);
//   const data = await rocketData.json();
//   return data;
// };

export const fetchRockets = () => (dispatch) => {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const rockets = data.map((element) => {
        const info = {};
        info.rocket_id = element.rocket_id;
        info.rocket_name = element.rocket_name;
        info.description = element.description;
        info.rocket_image = element.flickr_images;
        return info;
      });

      rockets.forEach((element) => {
        dispatch({
          type: BOOK_ROCKET,
          payload: {
            id: element.rocket_id,
            rocket_name: element.rocket_name,
            description: element.description,
            rocket_image: element.flickr_images,

          },
        });
      });
    });
};
const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ROCKET:
      return [...state, action.payload];
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
