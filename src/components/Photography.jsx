export default function Photography() {
  return (
    <section className="py-32 px-8">

      <h2 className="text-5xl mb-16">
        Photography
      </h2>

      <div className="columns-1 md:columns-3 gap-4">

        <img src="/photo1.jpg" className="mb-4 rounded-xl" />
        <img src="/photo2.jpg" className="mb-4 rounded-xl" />
        <img src="/photo3.jpg" className="mb-4 rounded-xl" />

      </div>

    </section>
  );
}

<section className="min-h-screen">

  <img
    src="/photo1.jpg"
    className="w-full h-screen object-cover"
  />

</section>