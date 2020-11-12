import React from "react";
import styles from "./Form.module.css";
import useSelect from "../hooks/useSelect";

const OPTIONS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencias" },
  { value: "technology", label: "Tecnología" },
];
const Form = () => {
  const [category, CategorySelect] = useSelect("general", OPTIONS);
  return (
    <div className={`${styles.searcher} row`}>
      <div className="col s12 m8 offset-m2">
        <form className="row">
          <h2 className={styles.heading}>Encuentra Noticias por Categoría</h2>
          <CategorySelect />
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
