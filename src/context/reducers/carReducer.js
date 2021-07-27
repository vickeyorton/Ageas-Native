const CarReducer = (state = [], action) => {
    // console.log("Reducer-State", state);
    switch (action.type) {
      case "GET_INCIDENT":
        return {
          ...state,
          incident: action.payload,
        };
        case "GET_CONTACT":
          return {
            ...state,
            contact: action.payload,
          };
        case "GET_INVOLVED":
        return {
          ...state,
          involved: action.payload,
        };
        case "GET_PASSENGERS":
        return {
          ...state,
          resObj: action.payload,
        };
  
      default:
        return {
          state,
        };
    }
  };
  
  export default CarReducer;