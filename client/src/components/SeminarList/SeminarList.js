import "./SeminarList.css";
import SeminarCard from "../SeminarCard/SeminarCard";

const SeminarList = ({ seminars, deleteSeminar, openModal }) => {
  return (
    <div className="seminar-list">
      {seminars.map((seminar) => {
        const imageUrl = seminar.photo;

        return (
          <SeminarCard
            key={seminar.id}
            imageUrl={imageUrl}
            deleteSeminar={deleteSeminar}
            openModal={openModal}
            seminar={seminar}
          />
        );
      })}
    </div>
  );
};

export default SeminarList;
