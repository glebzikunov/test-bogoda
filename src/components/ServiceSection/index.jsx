import { services } from "../../constants/index.js"
import ServiceCard from "../ServiceCard/index.jsx"
import "./styles.css"

const ServiceSection = () => {
  return (
    <section className="service-section">
      <div className="service-section__container">
        <div className="service-section__info-block info-block">
          <h2 className="info-block__title">Сервис</h2>
          <div className="info-block__first-separator"></div>
          <p className="info-block__subtitle">
            От идеи до незабываемого и измеримого результата.
          </p>
          <div className="info-block__second-separator"></div>
          <p className="info-block__text">
            Интеграция безупречного производства, передовых технологий и
            тщательного измерения производительности
          </p>
        </div>
        <div className="service-cards">
          {services.map((service) => (
            <ServiceCard
              key={service.value}
              image={service.icon}
              title={service.label}
              id={service.id}
              text={service.value}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
