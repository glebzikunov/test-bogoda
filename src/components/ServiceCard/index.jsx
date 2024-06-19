import { useDispatch } from "react-redux"
import { openModal, setUser } from "../../features/modal/modalSlice.js"

import "./styles.css"

const ServiceCard = ({ image, title, id }) => {
  const dispatch = useDispatch()

  return (
    <div className="service-card">
      <div className="service-card__container">
        <div className="service-card__image image">
          <img className="image" src={image} alt={title} />
        </div>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__text">
          Создадим уникальный и удобный дизайн.
        </p>
        <button
          onClick={() => {
            dispatch(setUser(id))
            dispatch(openModal())
          }}
          className="service-card__button"
        >
          ПОДРОБНЕЕ &rarr;
        </button>
      </div>
    </div>
  )
}

export default ServiceCard
