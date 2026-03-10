import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink =
    "https://wa.me/6285219527294?text=Assalamualaikum%20Ustadz%20Rudy%2C%20saya%20ingin%20konsultasi%20jadwal%20umrah";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default FloatingWhatsApp;