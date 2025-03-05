import "./SeminarCard.css";

const SeminarCard = ({ imageUrl, deleteSeminar, openModal, seminar }) => {
  return (
    <div className="seminar-card" key={seminar.id}>
      <h3>{seminar.title}</h3>
      <p>{seminar.description}</p>
      <h4>
        Дата: <span>{seminar.date}</span>
      </h4>
      <h4>
        Время:<span>{seminar.time}</span>
      </h4>
      <img
        className="seminar-card__img"
        src={imageUrl}
        alt={seminar.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <div className="seminar-card__btns">
        <button
          className="seminar-card__btn"
          onClick={() => openModal(seminar)}
        >
          {" "}
          Редактировать
        </button>
        <button
          className="seminar-card__btn"
          onClick={() => deleteSeminar(seminar.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default SeminarCard;
