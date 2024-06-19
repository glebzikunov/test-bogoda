import { useSelector } from "react-redux"
import ServiceSection from "./components/ServiceSection"
import "./App.css"
import Modal from "./components/Modal"

function App() {
  const { isOpen } = useSelector((state) => state.modal)

  if (isOpen) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }

  return (
    <div className="wrapper">
      <main>
        {isOpen && <Modal />}

        <ServiceSection />
      </main>
    </div>
  )
}

export default App
