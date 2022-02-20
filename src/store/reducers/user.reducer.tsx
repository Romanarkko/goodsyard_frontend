import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IUser } from '../../models/user';

const initialUserState = {
  email: '',
  userId: '',
  isActivated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => action.payload,
  },
});

export const { setUser } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
