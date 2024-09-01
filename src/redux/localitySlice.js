import { createSlice } from '@reduxjs/toolkit';

const localitySlice = createSlice({
  name: 'locality',
  initialState: { localityName:"",id:""},
  reducers: {
    setLocality: (state, action) => {
      return { localityName:action.payload.localityName, id: action.payload.id}
    },
   
  },
});

export const { setLocality} = localitySlice.actions;
export default localitySlice.reducer;