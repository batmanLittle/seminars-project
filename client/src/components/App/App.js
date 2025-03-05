import "./App.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-modal";
import SeminarList from "../SeminarList/SeminarList";
import SeminarModal from "../SeminarModal/SeminarModal";

const API_URL = "https://seminars-project.onrender.com/seminars";

const App = () => {
  const [seminars, setSeminars] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingSeminar, setEditingSeminar] = useState(null);

  Modal.setAppElement("#root");

  // Получение списка семинаров
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setSeminars(response.data))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  // Удаление семинара
  const deleteSeminar = (id) => {
    if (window.confirm("Вы уверены, что хотите удалить этот семинар?")) {
      axios
        .delete(`${API_URL}/${id}`)
        .then(() => setSeminars(seminars.filter((s) => s.id !== id)))
        .catch((error) => console.error("Ошибка удаления:", error));
    }
  };

  // Открытие модального окна
  const openModal = (seminar) => {
    setEditingSeminar(seminar);
    setModalIsOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setModalIsOpen(false);
    setEditingSeminar(null);
  };

  // Обновление семинара
  const updateSeminar = () => {
    axios
      .put(`${API_URL}/${editingSeminar.id}`, editingSeminar)
      .then(() => {
        setSeminars(
          seminars.map((s) => (s.id === editingSeminar.id ? editingSeminar : s))
        );
        closeModal();
      })
      .catch((error) => console.error("Ошибка обновления:", error));
  };

  return (
    <div className="App">
      <h1>Рсписание семинаров</h1>

      <SeminarList
        seminars={seminars}
        deleteSeminar={deleteSeminar}
        openModal={openModal}
      />

      <SeminarModal
        updateSeminar={updateSeminar}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        editingSeminar={editingSeminar}
        setEditingSeminar={setEditingSeminar}
      />
    </div>
  );
};

export default App;
