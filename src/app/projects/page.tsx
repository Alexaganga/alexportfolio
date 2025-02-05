const projects = [
  { title: "Todo Editor", description: "A web-based editor for managing todo lists.", link: "#" },
  { title: "Portfolio Website", description: "A personal portfolio built with Next.js.", link: "#" }
];

export default function Projects() {
  return (
    <section className="mt-8">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}