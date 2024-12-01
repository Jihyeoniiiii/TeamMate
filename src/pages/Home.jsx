import { useDispatch } from "react-redux";
import Modal from "../components/Modal"
import { useState } from "react";
import { resetAuth } from "../store/authSlice";

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState("login");
    const dispatch = useDispatch();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
      setIsModalOpen(false);
      dispatch(resetAuth());
    }

  return (
    <>
        <button onClick={openModal}>로그인열기</button>
        {isModalOpen && (
            <Modal type={type} setType={setType} onClose={closeModal} />
        )}
    </>
  )
}

export default Home