import formatValue from "../../utils/formatValue";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import foodImg from "../../assets/food.png";
import "../../styles/modal-content.scss";

interface ModalInfo {
  name: string;
  image: string;
  price: number;
}

interface ModalContentProps {
  modalInfo: ModalInfo;
  handleCloseModal: () => void
}

export const ModalContent = ({ modalInfo, handleCloseModal }: ModalContentProps) => {
  return (
    <div className="modal-content">
      <div className="modal-image">
        <img src={modalInfo.image ? modalInfo.image : foodImg} alt="img" />
      </div>
      <button className="modal-close-button" onClick={handleCloseModal}>
        <AiOutlineClose size={26}/>
      </button>
      <div className="modal-description">
        <span className="modal-title">{modalInfo.name}</span>
        <div className="modal-food-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span>{formatValue(modalInfo.price)}</span>
        </div>
      </div>
      <hr className="modal-separator" />
      <div className="modal-buttons">
        <div className="modal-button-add-quantity-content">
          <button>
            <AiOutlineMinus size={30} />
          </button>
          <span>1</span>
          <button>
            <AiOutlinePlus size={30} />
          </button>
        </div>
        <div className="modal-button-add-content">
          <button>
            <span>Adicionar</span>
            <span>{formatValue(modalInfo.price)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
