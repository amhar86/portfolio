const Projects = () => {
    const projects = [
      {
        title: "LIDAR3D - Spatial Mapping",
        description: "Developed an LIDAR-based 3D scanning system using a Time-of-Flight LiDAR sensor, a stepper motor, and an ARM Cortex-M4F microcontroller, enabling accurate and detailed indoor spatial mapping.",
        tech: ["C", "Python", "Open3D"],
        link: "#",
        image: "/images/Screenshot 2024-12-27 232626.png",
      },
      {
        title: "Console-Based Snake Game",
        description: "Developed a responsive two-player Snake game using C++ and Object-Oriented Programming principles, ensuring seamless gameplay and efficient memory usage.",
        tech: ["C/C++"],
        link: "#",
        image: "/images/Screenshot 2024-12-27 235814.png",
      },
      {
        title: "Note-It",
        description: "Built a fully functional, responsive note-taking application using JavaScript, HTML, and CSS, featuring CRUD operations, light/dark mode, and local storage for efficient data persistence.",
        tech: ["JavaScript", "HTML/CSS"],
        link: "#",
        image: "/images/Screenshot 2024-12-28 000958.png",
      },
    ];
  
    return (
      <section className="container mx-auto py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-black border-2 border-gray-800 rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:border-red-500 hover:shadow-lg w-80"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`w-full ${
                  project.title === "Console-Based Snake Game"
                    ? "h-40 object-contain"
                    : "h-auto object-cover"
                }`}
              />
              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-bold text-accent">{project.title}</h2>
                <p className="text-sm text-gray-400">{project.description}</p>
                <div className="flex flex-wrap mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  