import { Course, SocialLink, Testimonial } from './types';

export const EBOOKS = [
    {
        language: 'Inglés',
        flag: '🇺🇸',
        url: 'https://cristianloqhay-sudo.github.io/ingles1/'
    },
    {
        language: 'Portugués',
        flag: '🇧🇷',
        url: 'https://cristianloqhay-sudo.github.io/portugues/'
    },
    {
        language: 'Italiano',
        flag: '🇮🇹',
        url: 'https://cristianloqhay-sudo.github.io/italiano/'
    }
];

export const PAID_COURSES: Course[] = [
    {
        name: 'Curso Inglés',
        flag: '🇺🇸',
        url: 'https://go.hotmart.com/C103156556U'
    },
    {
        name: 'Curso Portugués',
        flag: '🇧🇷',
        url: 'https://go.hotmart.com/B103170175D'
    },
    {
        name: 'Curso Italiano',
        flag: '🇮🇹',
        url: 'https://go.hotmart.com/U103170151V'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Gracias a Lexigo, conseguí ese ascenso en mi trabajo. Las clases de conversación con hablantes nativos son increíbles y muy efectivas.",
        author: "María P.",
        course: "Curso de Inglés Avanzado",
        colorClass: "accent"
    },
    {
        quote: "Empecé el curso de Portugués sin saber nada y ahora puedo comunicarme perfectamente en mis viajes a Brasil. ¡Muy recomendado!",
        author: "Javier M.",
        course: "Curso de Portugués Básico",
        colorClass: "primary"
    },
    {
        quote: "La plataforma es muy intuitiva y el enfoque cultural del curso de Italiano es fascinante. Aprender es divertido y fácil de seguir.",
        author: "Sofía G.",
        course: "Curso de Italiano Intermedio",
        colorClass: "accent"
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61583705050960',
        hoverColorClass: 'hover:text-blue-600',
        iconPath: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/lexigo2.0/',
        hoverColorClass: 'hover:text-pink-600',
        iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@lexigo2.0',
        hoverColorClass: 'hover:text-black',
        iconPath: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.16c0 2.52-1.12 4.84-2.9 6.24-1.72 1.36-3.88 1.86-6.04 1.45-3.09-.59-5.52-3.09-6.12-6.17-.65-3.38 1.25-6.57 4.32-7.53 1.05-.33 2.19-.38 3.3-.21v4.2c-.92-.26-1.92-.16-2.77.29-1.07.57-1.69 1.73-1.58 2.94.1 1.26.96 2.37 2.17 2.75 1.2.37 2.53-.02 3.39-.98.79-.88 1.19-2.07 1.13-3.26.01-4.72.01-9.44.02-14.16z'
    }
];