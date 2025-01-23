import React from "react";
import PropTypes from "prop-types";
import { FaDragon } from "react-icons/fa"; // Ícone de dragão do react-icons
import "./DragonCard.scss";

const DragonCard = ({
  id,
  name,
  type,
  createdAt,
  histories,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="dragon-card">
      <div className="dragon-card__header">
        <div className="dragon-card__header__name">
          <h2>{name}</h2>
          <FaDragon className="dragon-card__header__icon" />
        </div>
        <span className="dragon-card__header__type">{type}</span>
      </div>
      <div className="dragon-card__body">
        <p className="dragon-card__body__date">
          Criado em: {new Date(createdAt).toLocaleDateString()}
        </p>
        {histories.length > 0 ? (
          <ul className="dragon-card__body__histories">
            {histories.map((history, index) => (
              <li key={index} className="dragon-card__body__histories__history">
                {history}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dragon-card__body__no-history">
            Nenhuma história registrada.
          </p>
        )}

        <div className="dragon-card__body__actions">
          <button
            className="dragon-card__body__button"
            onClick={() => onEdit(id)}
          >
            Editar
          </button>
          <button
            className="dragon-card__body__button"
            onClick={() => onDelete(id)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

DragonCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  histories: PropTypes.arrayOf(PropTypes.string),
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

DragonCard.defaultProps = {
  histories: [],
};

export default DragonCard;
