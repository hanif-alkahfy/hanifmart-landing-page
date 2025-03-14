export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#B3E5FC] to-[#F0F9FF] overflow-hidden">
      {/* Gambar Jus Floating */}
      <img
        src="/images/jus buah naga.png"
        alt="Jus Segar"
        className="absolute top-10 left-16 w-44 animate-floating"
      />
      <img
        src="/images/jus jambu.png"
        alt="Jamu Tradisional"
        className="absolute bottom-10 right-16 w-44 animate-floating delay-200"
      />

      {/* Teks Hero */}
      <div className="text-center px-8 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-[#01579B] leading-tight drop-shadow-lg animate-fadeIn">
          Nikmati Kesegaran Alami <br />
          <span className="text-[#29B6F6]">Jus Buah</span> & <span className="text-[#81D4FA]">Jamu Sehat</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 animate-fadeIn delay-300">
          Segarkan harimu dengan pilihan minuman sehat dan penuh manfaat!
        </p>
      </div>
    </section>
  );
}
