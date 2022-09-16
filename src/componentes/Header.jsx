import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";

export const Header = () => {
  const card = useSelector((store) => store.card);


  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to={"/"}>Fake Store</Link>
      </div>
      <div className={styles.menu}>
        <Link to={"/cards"}>
          <button
            type="button"
            className="btn btn-light text-primary position-relative"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {card.length}
              <span className="visually-hidden"></span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
