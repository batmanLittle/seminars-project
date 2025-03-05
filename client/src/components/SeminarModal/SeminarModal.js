import "./SeminarModal.css";
import Modal from "react-modal";
import dayjs from "dayjs";

const SeminarModal = ({
  updateSeminar,
  modalIsOpen,
  closeModal,
  editingSeminar,
  setEditingSeminar,
}) => {
  const formatDate = (date) => dayjs(date).format("DD.MM.YYYY");

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
              value={dayjs(editingSeminar.date, "DD.MM.YYYY").format(
                "YYYY-MM-DD"
              )}
              onChange={(e) =>
                setEditingSeminar({
                  ...editingSeminar,
                  date: formatDate(e.target.value),
                })
              }
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
