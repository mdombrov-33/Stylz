import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ReturnBtn() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="btn text-2xl font-bold uppercase"
    >
      <IoArrowBackCircle className="inline" />
      Return
    </button>
  );
}

export default ReturnBtn;
