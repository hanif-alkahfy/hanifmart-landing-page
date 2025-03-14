import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-6 bg-[#01579B] text-white text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-sm">© 2025 Jus & Jamu Sehat | Semua Hak Dilindungi</p>
    </motion.footer>
  );
}
