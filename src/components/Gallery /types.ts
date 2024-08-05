import { StaticImageData } from "next/image";

export interface IGalleryItem {
    src: string; 
}

export interface IGalleryProps {
    items: IGalleryItem[]; 
}