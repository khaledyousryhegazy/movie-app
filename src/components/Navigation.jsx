import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation({ nextPage, prevPage, pageNum, data }) {
  return (
    <div className="container py-5 flex justify-between">
      <button
        onClick={prevPage}
        disabled={pageNum === 1}
        className={`flex items-center gap-2 capitalize p-3 bg-[#BB86FC] text-white rounded-md ${
          pageNum === 1 ? "cursor-default" : "cursor-pointer"
        }`}
      >
        <FontAwesomeIcon icon={faAnglesLeft} /> prev page
      </button>

      <button
        onClick={nextPage}
        className={`flex items-center gap-2 capitalize p-3 bg-[#BB86FC] text-white rounded-md ${
          data && data.length === 0 ? "cursor-default" : "cursor-pointer"
        }`}
      >
        next page <FontAwesomeIcon icon={faAnglesRight} />
      </button>
    </div>
  );
}

export default Navigation;
