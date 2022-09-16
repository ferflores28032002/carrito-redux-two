const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

export const CarritoSlices = createSlice({
  name: "CarritoSlices",
  initialState,
  reducers: {
    aumentar: (state, action) => {
      const productExistente = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productExistente >= 0) {
        state[productExistente].cantidad += 1;
      } else {
        state.push({ ...action.payload, cantidad: 1 });
      }

      localStorage.setItem("productos", JSON.stringify(state));
    },
    decrementar: (state, action) => {
      const product = state.findIndex(
        (produ) => produ.id === action.payload.id
      );

      if (action.payload.decre) {
        if (state[product].cantidad < 2) {
          const newVlorr = state.filter(
            (valor) => valor.id !== state[product].id
          );
          return (state = newVlorr);
        } else {
          state[product].cantidad -= 1;
        }
      } else {
        state[product].cantidad += 1;
      }
    },
  },
});

export const { aumentar, decrementar } = CarritoSlices.actions;
export default CarritoSlices.reducer;
