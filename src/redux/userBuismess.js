import { createSlice } from "@reduxjs/toolkit";

export const userBuisnessSlice = createSlice({
  name: "userBuisness",
  initialState: {
    buisnessUser: {
      buisnessName: "",
      contactEmail: "",
      industryId: "",
    },

    availablePolicyTypes: [],
  },
  reducers: {
    addUser: (state, action) => {
      const user = action.payload;
      for (let key in user) {
        state["buisnessUser"][key] = user[key];
      }
    },
    addAvailablePolicy: (state, action) => {
      if (action.payload.length > 0) {
        const avlPolicy = action.payload;
        state["availablePolicyTypes"] = avlPolicy.map((elem) => {
          if (elem === "GL") {
            elem = "General Liability";
          } else if (elem === "PL") {
            elem = "Professional Liability";
          } else {
            elem = "Business Owners Policy";
          }
          return elem;
        });
      }
    },
  },
});

export const { addUser, addAvailablePolicy } = userBuisnessSlice.actions;

export default userBuisnessSlice.reducer;
