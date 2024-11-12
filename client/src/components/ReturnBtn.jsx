import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ReturnBtn({ to }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(to)}
      className="group btn w-44 text-2xl font-bold uppercase"
    >
      <IoArrowBackCircle className="inline transform transition-transform group-hover:-translate-x-1" />
      Return
    </button>
  );
}

export default ReturnBtn;
