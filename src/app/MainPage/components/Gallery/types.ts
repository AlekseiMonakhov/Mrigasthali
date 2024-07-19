import { StaticImageData } from "next/image";

export interface IGalleryItem {
    src: string; // Оставляем как string
    title: string;
    subtitle: string;
}

export interface IGalleryProps {
    items: IGalleryItem[]; // Это массив IGalleryItem
}