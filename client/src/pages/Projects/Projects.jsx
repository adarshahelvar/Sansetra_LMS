import "./Projects.css";

const projects = Array.from(
  { length: 20 },

  (_, i) => ({
    title: `SAP Industry Project ${i + 1}`,

    description:
      "Enterprise-grade SAP implementation involving reporting, workflow automation, business optimization, inventory control, and large-scale process management.",
  }),
);

function Projects() {
  return (
    <div className="projects-page">
      <div className="container">
        <h1>SAP Projects</h1>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4" key={index}>
              <div className="project-card">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <button
                  onClick={() => {
                    window.location.href = "mailto:info@sansetra.com";
                  }}
                >
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
