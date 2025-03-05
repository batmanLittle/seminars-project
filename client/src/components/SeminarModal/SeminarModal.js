import "./SeminarModal.css";
import Modal from "react-modal";

const SeminarModal = ({
  updateSeminar,
  modalIsOpen,
  closeModal,
  editingSeminar,
  setEditingSeminar,
}) => {
  const formatDateForDisplay = (isoDate) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}.${month}.${year}`;
  };

  const formatDateForInput = (formattedDate) => {
    if (!formattedDate) return "";
    const [day, month, year] = formattedDate.split(".");
    return `${year}-${month}-${day}`;
  };

  const isValidDate = (date) => {
    return /^\d{2}\.\d{2}\.\d{4}$/.test(date);
  };

  return (
    <Modal
      className="seminar-modal"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      bodyOpenClassName="modal-open"
    >
      <h2>Редактирование:</h2>
      {editingSeminar && (
        <div className="seminar-modal__form">
          <label className="seminar-modal__label">
            Название:
            <input
              type="text"
              value={editingSeminar.title}
              onChange={(e) =>
                setEditingSeminar({ ...editingSeminar, title: e.target.value })
              }
            />
          </label>
          <label>
            Описание:
            <textarea
              value={editingSeminar.description}
              onChange={(e) =>
                setEditingSeminar({
                  ...editingSeminar,
                  description: e.target.value,
                })
              }
            />
          </label>
          <label>
            Дата:
            <input
              type="date"
              value={formatDateForInput(editingSeminar.date)}
              onChange={(e) => {
                const formattedDate = formatDateForDisplay(e.target.value);
                if (isValidDate(formattedDate)) {
                  setEditingSeminar({ ...editingSeminar, date: formattedDate });
                }
              }}
            />
          </label>
          <label>
            Время:
            <input
              type="time"
              value={editingSeminar.time}
              onChange={(e) =>
                setEditingSeminar({ ...editingSeminar, time: e.target.value })
              }
            />
          </label>
          <div className="seminar-modal__btns">
            <button className="seminar-modal__btn" onClick={updateSeminar}>
              Сохранить
            </button>
            <button className="seminar-modal__btn" onClick={closeModal}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SeminarModal;
