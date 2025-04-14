import {useRef , useEffect , useState} from "react";

export default function RoomConfirmationPopup({onClose}) {
  const popupRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  // handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        triggerClose();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") triggerClose();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div
      id="room-confirmation-popup"
      role="dialog"
      tabIndex="-1"
      className={`fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 transition-opacity duration-300 ease-in ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}    >
      <div ref={popupRef} className={`relative w-[613px] max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out ${
          isClosing
            ? "opacity-0 scale-95"
            : "opacity-100 scale-100 animate-fadeInScale"
        }`}>
        <div className="h-[370px] w-full">
          <img
            src="/Images/popup-img.svg"
            alt="game"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="p-6 space-y-4">
          <h5 className="text-2xl font-semibold text-[#242424]">
            Ready to Start Climbing EveresT?
          </h5>
          <div className="text-[#242424] text-[20px] leading-relaxed">
            <p className="mb-2">This level will test your knowledge on:</p>
            <ul className="list-disc list-inside text-[#242424] text-sm md:text-lg space-y-1">
              <li>Understanding our key competitors’ market strategies</li>
              <li>
                Identifying product differentiators and unique selling points
              </li>
              <li>Analyzing customer needs and how our solutions compare</li>
            </ul>
          </div>

          <button className="w-full bg-[#0096D7] text-white text-lg md:text-2xl font-medium cursor-pointer rounded-md py-3 flex items-center justify-center gap-2 hover:bg-[#007bb3] transition duration-300">
            <img src="/Images/rocket-white.svg" alt="" className="w-6 h-6" />
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
