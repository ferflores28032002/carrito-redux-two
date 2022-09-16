import { useSelector, useDispatch } from "react-redux";
import styles from "../css/MostrarElementos.module.css";
import { decrementar } from "../store/slices/CarritoSlices";

export const CarritoElmentItems = () => {
  const elementos = useSelector((store) => store.card);

  const dispacth = useDispatch();

  const decrementCarrito = (id) => {
    dispacth(decrementar({ id: id, decre: false }));
  };
  const decrementCarrito2 = (id) => {
    dispacth(decrementar({ id: id, decre: true }));
  };

  return (
    <>
      <div className="w-100 text-center px-5">
        <h2>Carrito de Compras</h2>
        <hr />
      </div>
      <div className={styles.container2}>
        {elementos.length === 0 ? (
          <h3>Carrito Vacio</h3>
        ) : (
          elementos.map((element) => (
            <div key={element.id} className="card shadow-lg" id={styles.card}>
              <img
                src={element.image}
                id={styles.img}
                className="card-img-top"
                alt={element.title}
              />
              <div className="card-body">
                <h6 className="card-title" id={styles.titulo} >{element.title}</h6>
                <h6 className="card-title">{element.price} * {element.cantidad} = {element.price * element.cantidad}</h6>
                <div className="d-flex justify-content-between mt-4">
                  <button
                    onClick={() => decrementCarrito(element.id)}
                    className="btn btn-primary fw-bold"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementCarrito2(element.id)}
                    className="btn btn-danger fw-bold"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};
