import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import instance from "../../axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#111",
    borderRadius: "1rem",
  },
};

Modal.setAppElement("#root");

interface Props {
  id: number;
  isOpenModal: boolean;
  closeModal: () => void;
}

const TrailerModal: React.FC<Props> = ({ isOpenModal, closeModal, id }) => {
  const [path, setPath] = useState<string>("zrv_SAnnmtk");

  const getTrailerPath = () => {
    instance
      .get(
        "/movie/" + id + "/videos?api_key=" + process.env.REACT_APP_TMDB_API_KEY
      )
      .then((res) => setPath(res.data?.results[1]?.key));
  };

  useEffect(() => {
    getTrailerPath();
  }, [id]);

  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <iframe
        width="700"
        height="400"
        src={`https://www.youtube.com/embed/${path}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Modal>
  );
};

export default TrailerModal;
