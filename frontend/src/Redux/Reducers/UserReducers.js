import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS } from "../Constants/UserConstants";

//login
export const userLoginReducer = (state = {},action)=>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return{loading: true };
        case USER_LOGIN_SUCCESS:
                return{loading: false , userInfo :action.payload};
        case USER_LOGIN_FAIL:
                return{loading: false , error:action.payload};
        case USER_LOGOUT:
            return{};
        default:
            return state;
    }
};

//REGISTER
export const userRegisterReducer = (state = {},action)=>{
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return{loading: true };
        case USER_REGISTER_SUCCESS:
                return{loading: false , userInfo :action.payload};
        case USER_REGISTER_FAIL:
                return{loading: false , error:action.payload};
        
        default:
            return state;
    }
};


// //USER DETAILS
// export const userDetailsReducer = (state = {user:{}},action)=>{
//     switch (action.type) {
//         case USER_DETAILS_REQUEST:
//             return{loading: true };
//         case USER_DETAILS_SUCCESS:
//                 return{loading: false , user :action.payload};
//         case USER_DETAILS_FAIL:
//                 return{loading: false , error:action.payload};
//         case USER_DETAILS_RESET:
//             return{user :{}};
//         default:
//             return state;
//     }
// };

// //UPDATE PROFILE
// export const userUpdateProfileReducer = (state = {},action)=>{
//     switch (action.type) {
//         case USER_UPDATE_PROFILE_REQUEST:
//             return{loading: true };
//         case USER_UPDATE_PROFILE_SUCCESS:
//                 return{loading: false,success: true , userInfo :action.payload};
//         case USER_UPDATE_PROFILE_FAIL:
//                 return{loading: false , error:action.payload};
        
//         default:
//             return state;
//     }
// };
// USER DETAILS
export const userDetailsReducer = (state = { loading: true, user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, user: {}, error: 'Không được ủy quyền, token không hợp lệ' };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

// UPDATE PROFILE
export const userUpdateProfileReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, success: true, userInfo: action.payload, error: null };
    case USER_UPDATE_PROFILE_FAIL:
      return { ...state, loading: false, error: 'Không được ủy quyền, token không hợp lệ' };
    default:
      return state;
  }
};
