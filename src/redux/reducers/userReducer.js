import { createSlice } from '@reduxjs/toolkit'
import { userLocalService } from '../../services/localStorageService';

const initialState = {
    // userInfo: null, <-- ban đầu là null nhưng sau khi dùng local storage thì đổi thành load local storage:
    userInfo: userLocalService.getItem(),
    userRegisterInfo: null,
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserInfo:(state, action) => {
        // thêm nội dung nếu có
        // cuối cùng luôn trả state về action.payload
        state.userInfo = action.payload;
    },
    setUserRegisterInfo:(state,action) => {
      state.userRegisterInfo = action.payload;
    },
  }
});

// các action được tạo ra cho từng case của reducer
export const {setUserInfo, setUserRegisterInfo} = userReducer.actions

export default userReducer.reducer