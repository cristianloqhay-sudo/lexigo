import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
                    Lo que Dicen Nuestros Estudiantes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t, index) => (
                        <div
                            key={index}
                            className={`bg-gray-50 p-8 rounded-2xl shadow-lg border-t-4 hover:shadow-xl transition duration-300 ${
                                t.colorClass === 'accent' ? 'border-accent' : 'border-primary'
                            }`}
                        >
                            <div className={`text-4xl mb-4 ${
                                t.colorClass === 'accent' ? 'text-accent' : 'text-primary'
                            }`}>
                                “
                            </div>
                            <p className="text-gray-600 italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="border-t border-gray-200 pt-4">
                                <div className="font-bold text-gray-900">{t.author}</div>
                                <div className="text-sm text-primary font-medium">{t.course}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;