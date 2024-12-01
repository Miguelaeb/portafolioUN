"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Página Web Personal en HTML",
    link: "https://pr-ctica-no-1-html.vercel.app/",
  },
  {
    title: "Página web que muestre 102 Etiquetas HTML",
    link: "https://pr-ctica-no-2-html.vercel.app/",
  },
  {
    title: "Estructura de menús usando CSS",
    link: "https://pr-ctica-no-2-html-css.vercel.app/",
  },
  {
    title: "Validar si una cédula es correcta",
    link: "https://cedula-validator.vercel.app/",
  },
  {
    title: "Menú dinámico",
    link: "https://dynamic-menu-eight.vercel.app/",
  },
  {
    title: "Formulario con múltiples páginas",
    link: "https://form-seven-lyart.vercel.app/",
  },
  {
    title: "Formulario de contactos, generar código QR",
    link: "https://qrgenerator-seven-mu.vercel.app/",
  },
  {
    title: "Formulario con librería de gráficos",
    link: "https://chartform.vercel.app/",
  },
  {
    title: "Formulario con Acceso a BD",
    link: "https://form-db-seven.vercel.app/",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section id="proyectos" className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Mis Proyectos
        </h2>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 p-6 flex items-center justify-center">
                <span className="text-lg font-semibold px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {project.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:hidden h-48 mb-4">
          <Link
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden p-6 flex items-center justify-center">
              <span className="text-lg font-semibold px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                {projects[currentIndex].title}
              </span>
            </div>
          </Link>
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevProject}
              className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
