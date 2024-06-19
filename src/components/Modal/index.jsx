import { useDispatch, useSelector } from "react-redux"
import { closeModal, setUser } from "../../features/modal/modalSlice"
import "./styles.css"
import { useGetUserQuery } from "../../features/user/userSlice"

const Modal = () => {
  const dispatch = useDispatch()
  const { id } = useSelector((state) => state.modal)
  const { data, error, isLoading, isSuccess, isError } = useGetUserQuery(id)

  return (
    <aside className="modal">
      <div className="modal__container">
        <p className="modal-text">
          {isLoading && "Loading"}
          {isError && error.message}
          {isSuccess && data && data.name}
        </p>
        <button
          className="close-modal__btn"
          onClick={() => {
            dispatch(setUser(0))
            dispatch(closeModal())
          }}
        >
          Close
        </button>
      </div>
    </aside>
  )
}

export default Modal
