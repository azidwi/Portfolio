const projects = [
  {
    title: "Ferrari Clone",
    desc: "Luxury automotive experience",
    image: "/ferrari.jpg"
  },
  {
    title: "The Legends",
    desc: "Fantasy universe project",
    image: "/legends.jpg"
  }
];

export default function Projects() {
  return (
    <section className="py-32 px-8">
      <h2 className="text-5xl mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl"
          >
            <img
              src={project.image}
              className="group-hover:scale-110 duration-700"
            />

            <div className="mt-4">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

<section className="min-h-screen flex items-center px-20">

  <div>

    <p className="text-zinc-500">
      PROJECT 01
    </p>

    <h2 className="text-8xl font-bold">
      Ferrari Clone
    </h2>

    <p className="text-zinc-400 mt-6 max-w-xl">
      Luxury automotive web experience inspired by Ferrari.
    </p>

  </div>

</section>