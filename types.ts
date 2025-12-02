export interface Testimonial {
    quote: string;
    author: string;
    course: string;
    colorClass: string; // 'accent' or 'primary' for border/icon color
}

export interface SocialLink {
    name: string;
    url: string;
    iconPath: string;
    hoverColorClass: string;
}

export interface Course {
    name: string;
    flag: string;
    url: string;
}
