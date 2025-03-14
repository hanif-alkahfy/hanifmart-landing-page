import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function ContactUs() {
  const socialMedia = [
    {
      id: 1,
      name: "Instagram",
      icon: <FaInstagram className="text-white" size={30} />,
      url: "https://instagram.com/akunmu", // Ganti dengan akun Instagram bisnis
      bgColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "Facebook",
      icon: <FaFacebookF className="text-white" size={30} />,
      url: "https://facebook.com/akunmu", // Ganti dengan akun Facebook bisnis
      bgColor: "bg-blue-600",
    },
    {
      id: 3,
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-white" size={30} />,
      url: "https://wa.me/6281234567890", // Ganti dengan nomor WhatsApp bisnis
      bgColor: "bg-green-500",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-[#B3E5FC] py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-[#01579B] mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Hubungi Kami
      </motion.h2>
      <motion.p
        className="text-[#01579B] mb-8 text-center max-w-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Hubungi kami melalui media sosial berikut:
      </motion.p>

      <div className="flex space-x-6">
        {socialMedia.map((social, index) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${social.bgColor} text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
