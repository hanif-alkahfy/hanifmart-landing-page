import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const [flipped, setFlipped] = useState({});

  const toggleFlip = (id) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const products = [
    {
      id: 1,
      name: "Jus Buah Naga",
      benefits: "Mengandung banyak antioksidan dan serat baik untuk pencernaan.",
      images: ["/images/jus buah naga.png"],
    },
    {
      id: 2,
      name: "Jus Jambu",
      benefits: "Kaya vitamin C, baik untuk meningkatkan daya tahan tubuh.",
      images: ["/images/jus jambu.png"],
    },
    {
      id: 3,
      name: "Jus Melon",
      benefits: "Menyegarkan dan membantu menjaga hidrasi tubuh.",
      images: ["/images/jus melon.png"],
    },
    {
      id: 4,
      name: "Jamu Kunyit Asam",
      benefits: "Membantu meredakan nyeri haid dan meningkatkan daya tahan tubuh.",
      images: ["/images/kunyit asam.png"],
    },
    {
      id: 5,
      name: "Jamu Beras Kencur",
      benefits: "Baik untuk meningkatkan energi dan mengatasi masuk angin.",
      images: ["/images/beras kencur.png"],
    },
    {
      id: 6,
      name: "Jamu Asam Jawa",
      benefits: "Membantu meredakan peradangan dan melancarkan pencernaan.",
      images: ["/images/asam jawa.png"],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#F0F9FF] py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-[#01579B] mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Produk Kami
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative w-72 h-96 perspective-1000"
            onClick={() => toggleFlip(product.id)}
          >
            {/* Card Wrapper */}
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                flipped[product.id] ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side */}
              <div
                className="absolute w-full h-full bg-white shadow-lg rounded-2xl flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:scale-105"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-[#01579B] mt-4">
                  {product.name}
                </h3>
              </div>

              {/* Back Side */}
              <div
                className="absolute w-full h-full bg-white text-[#81D4FA] rounded-2xl flex flex-col items-center justify-center text-center p-6 transform rotate-y-180"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-lg italic font-semibold">{product.benefits}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
