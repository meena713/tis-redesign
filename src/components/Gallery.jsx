import Reveal from "./Reveal";

const photos = [
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
    title: "Learning Together",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900",
    title: "Classroom Activities",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900",
    title: "Sports and Teamwork",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
    title: "Student Development",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-[#bd8b3d]">
            Life at TIS
          </p>
          <h2 className="text-4xl font-semibold text-[#173e50] md:text-5xl">
            Moments That Matter
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-gray-600">
            Explore the learning experiences and activities
            that make school life memorable.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <Reveal key={photo.title} delay={index * 0.1}>
              <div className="group relative h-80 overflow-hidden rounded-2xl">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 opacity-100 transition-opacity">
                  <h3 className="text-xl font-semibold text-white">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}