// WhyEnroll.jsx
const WhyEnroll = ({ course }) => {
  const data = course.whyEnroll;

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6">{data.title}</h2>

      <div className="text-justify space-y-4 text-gray-700">
        {data.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}

        <div className="flex justify-center my-8">
          <img
            src={data.image.src}
            alt={data.image.alt}
            className="rounded-lg shadow-md w-[500px] h-[300px] object-cover"
          />
        </div>

        {data.content.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </section>
  );
};

export default WhyEnroll;
