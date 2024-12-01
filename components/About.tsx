const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "TypeScript",
    "Next JS",
    "Tailwind CSS",
    "Bootstrap",
    "Material UI",
    "Astro",
  ];

  return (
    <section id="sobre-mi" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Sobre Mí
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Me dedico a construir soluciones web receptivas que combinan un
            diseño elegante con una navegación intuitiva.
          </p>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Habilidades Técnicas
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Soy un desarrollador front-end que actualmente reside en Santo
            Domingo, República Dominicana. Me especializo en la creación de
            aplicaciones web e interfaces de usuario que no solo son visualmente
            atractivas, sino también fáciles de usar y navegar. Mi experiencia
            incluye HTML, CSS, JavaScript, TypeScript, frameworks como Tailwind
            CSS, Bootstrap y Material UI, y bibliotecas como React JS y Next.js.
            Soy apasionado de crear diseños responsivos y accesibles que
            funcionen sin problemas en diferentes dispositivos y navegadores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
