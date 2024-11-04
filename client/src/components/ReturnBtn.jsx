import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ReturnBtn({ to }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="btn text-2xl font-bold uppercase group"
    >
      <IoArrowBackCircle className="inline transition-transform transform group-hover:-translate-x-1" />
      Return
    </button>
  );
}

export default ReturnBtn;
