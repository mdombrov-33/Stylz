import { FaWhatsapp } from "react-icons/fa"

function WhatsAppBtn() {
    const handleClick = () => {
        window.location.href = "https://www.whatsapp.com/";
      };

    return (
        <button onClick={handleClick} className="btn w-96 md:w-72">
        <FaWhatsapp className="mr-2 text-2xl" />
        <span className="text-lg">WhatsApp</span>
        <span className="ml-5 w-20 rounded-xl border border-accent bg-accent p-2">
          New!
        </span>
      </button>
    )
}

export default WhatsAppBtn
