import { motion } from "framer-motion";
import { FaLeaf, FaGlassCheers, FaHeart } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaLeaf className="text-4xl text-[#01579B]" />,
    title: "Bahan Alami",
    desc: "Terbuat dari 100% buah segar dan rempah berkualitas tinggi.",
  },
  {
    id: 2,
    icon: <FaGlassCheers className="text-4xl text-[#01579B]" />,
    title: "Rasa Autentik",
    desc: "Kombinasi rasa yang khas dan menyegarkan tanpa pengawet.",
  },
  {
    id: 3,
    icon: <FaHeart className="text-4xl text-[#01579B]" />,
    title: "Sehat & Bergizi",
    desc: "Dikemas dengan manfaat kesehatan untuk tubuh yang lebih bugar.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-[#81D4FA] text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Kenapa Memilih Produk Kami?
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="bg-white text-[#01579B] p-6 rounded-2xl shadow-md w-72"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
            <p className="text-sm mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
