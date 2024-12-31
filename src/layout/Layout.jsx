import { useDispatch } from "react-redux";
import Modal from "../components/Modal"
import { useState } from "react";
import { resetAuth } from "../store/authSlice";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState("login");
    const dispatch = useDispatch();

    const openModal = () => {
      setIsModalOpen(true);
      setType("login");
    }
    const closeModal = () => {
      setIsModalOpen(false);
      dispatch(resetAuth());
    }

  return (
    <>
        <NavigationBar openModal={openModal}/>
        {isModalOpen && (
            <Modal type={type} setType={setType} onClose={closeModal} />
        )}
        <Outlet />
    </>
  )
}

export default Layout