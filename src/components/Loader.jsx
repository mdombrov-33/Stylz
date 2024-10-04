import PuffLoader from "react-spinners/PuffLoader";

function Loader() {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center">
      <PuffLoader color="#a6a4ad" size={200} />
    </div>
  );
}

export default Loader;
