import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styles from "../css/MostrarElementos.module.css";
import { aumentar } from "../store/slices/CarritoSlices";

export const ElementsItems = ({ element }) => {
  const dispatch = useDispatch();

  const carrito = function () {
    dispatch(aumentar(element));
    toast.success("Añadido al carrito", {
      position: 'top-center'
    });
  };

  return (
    <div key={element.id} className="card shadow-lg" id={styles.card}>
      <img
        src={element.image}
        id={styles.img}
        className="card-img-top"
        alt={element.title}
      />
      <div className="card-body">
        <p className="card-text" id={styles.titulo}>
          {element.title}
        </p>
        <div className="d-flex justify-content-between mt-4">
          <h5 className="card-title">${element.price}.00</h5>
          <button onClick={carrito} className="btn btn-primary">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>

      {/* <Toaster position="top-center" reverseOrder={true} /> */}
    </div>
  );
};
