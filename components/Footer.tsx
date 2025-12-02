import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary text-white py-8 border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-bold text-xl">Lexigo</span>
                </div>
                <div className="text-sm text-blue-200">
                    &copy; {new Date().getFullYear()} Lexigo. Todos los derechos reservados.
                </div>
                <div className="mt-4 md:mt-0 text-sm text-blue-200">
                    Aprender idiomas nunca fue tan fácil.
                </div>
            </div>
        </footer>
    );
};

export default Footer;