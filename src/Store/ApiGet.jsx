import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api = `http://localhost:3000/user`;

const initialState = {
  user: [],
  isLoading: true,
  isError: null,
};
const userData = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setLoading, setUserData } = userData.actions;
export default userData.reducer;

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(Api);
    dispatch(setUserData(res.data));
  } finally {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, "1000");
  }
};
// export const editUserData = (data) => async (dispatch) => {
//   dispatch(setLoading(true));
//   console.log(data)
//   try {
//     console.log(await axios.get(`${Api}/${data.id}`))
//     dispatch(getUsers());
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
export const editUserData = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  console.log(data)
  try {
    const newData = await axios.putForm(`${Api}`, data)

   console.log( newData) // ✅ correct
    dispatch(getUsers());
  } finally {
    dispatch(setLoading(false));
  }
};
export const addUserData = (data) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.post(`${Api}`, data);
    dispatch(getUsers());
  } finally {
    dispatch(setLoading(false));
  }
};
export const deleteUserData = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.delete(`${Api}/${id}`);
    dispatch(getUsers());
  } finally {
    dispatch(setLoading(false));
  }
};
