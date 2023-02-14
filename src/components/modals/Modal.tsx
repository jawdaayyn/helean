import styles from "./Modal.module.css";
import Chart from "../charts/Chart";
const ModalButton = ({
  shop,
  setOpenModal,
}: {
  shop: ShopDetails;
  setOpenModal: any;
}) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <img
              src={shop.shop_picture}
              className={styles.img}
              alt="Shop's establishment"
            />
            <div className={styles.col}>
              <h6>Score Total</h6>
              <Chart R={shop.total_shop_score} />
            </div>
            <ul>
              <li>
                <h6>{shop.company_name}</h6>
              </li>
              <li>
                <h6>{shop.shop_adress}</h6>
              </li>
              <li>
                <h6>
                  {shop.shop_manager_name} {shop.shop_manager_surname}
                </h6>
              </li>
            </ul>
          </div>
          <div className={styles.dataContainer}>
            {shop.data.map((establishment, i) => (
              <div key={i} className={styles.row}>
                <div className={styles.scoreContent}>
                  <span>Score n°{i}</span>
                  <span
                    style={{
                      color: "#386dff",
                    }}
                  >
                    {establishment.mean_shop}
                  </span>
                </div>
                <div className={styles.dataContent}>
                  <span>R</span>
                  <Chart R={establishment.R} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalButton;
