import styles from "../css/MostrarElementos.module.css";
import { useApiRequest } from "../hooks/useApiRequest";
import { ElementsItems } from "./ElementsItems";
import { Loading } from "./Loading";

export const MostrarElementos = () => {
  const { elementos, loading } = useApiRequest({ query: "products" });


  if (loading) {
    return <Loading />;
  }


  return (
    <>
      <div className="row w-100 px-5">
        <div className="col-md-12 text-center">
          <h2 >Tienda Fake Store - Productos</h2>
          <hr />
        </div>
      </div>

      <ul className={styles.container}>
        {elementos.map((element) => (
          <ElementsItems
            key={element.id}
            element={element}
          />
        ))}
      </ul>
    </>
  );
};
