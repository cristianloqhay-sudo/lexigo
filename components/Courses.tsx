import React, { useEffect, useState } from 'react';
import { PAID_COURSES } from '../constants';

const Courses: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Logic to simulate the 5000ms delay from the original HTML
        const mountTimer = setTimeout(() => {
            setIsMounted(true);
            
            // Allow DOM to update before triggering CSS transition
            const fadeTimer = setTimeout(() => {
                setIsVisible(true);
            }, 50);

            return () => clearTimeout(fadeTimer);
        }, 5000);

        return () => clearTimeout(mountTimer);
    }, []);

    // If not mounted yet, render nothing (similar to 'hidden' in the original HTML)
    if (!isMounted) return null;

    return (
        <section
            id="cursos-nav"
            className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
            {/* Motivational Quote */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-accent shadow-sm mb-10 max-w-3xl mx-auto text-center">
                <p className="text-xl text-gray-700 font-medium italic">
                    "¡No pospongas más tus sueños! Elige el idioma que siempre quisiste aprender y comienza hoy mismo con nuestros cursos diseñados para tu éxito."
                </p>
            </div>

            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Elige tu Próximo Idioma</h2>

            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
                {PAID_COURSES.map((course) => (
                    <a
                        key={course.name}
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto min-w-[280px] bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white text-xl font-bold px-8 py-5 rounded-2xl transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 text-center flex flex-col items-center group"
                    >
                        <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">{course.flag}</span>
                        <span>{course.name}</span>
                        <span className="text-xs font-normal mt-1 opacity-70">Ver Oferta</span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Courses;