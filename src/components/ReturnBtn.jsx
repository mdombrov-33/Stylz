import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ReturnBtn() {
  const Navigate = useNavigate();
  return (
    <button
      onClick={() => Navigate(-1)}
      className="btn text-2xl font-bold uppercase"
    >
      <IoArrowBackCircle className="inline" />
      Return
    </button>
  );
}

export default ReturnBtn;
