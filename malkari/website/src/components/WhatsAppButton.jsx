import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "919493193525"; // change your number
  const message = "Hello, I need help";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999]">
      <button
        onClick={handleClick}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500 shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        {/* WhatsApp Icon */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-7 h-7 sm:w-8 sm:h-8 z-10"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;