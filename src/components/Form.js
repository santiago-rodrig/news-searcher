import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form className="row">
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btnBlock} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
