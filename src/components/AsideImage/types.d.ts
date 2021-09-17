export type SourceURL = `${"http://" | "https://"}${string}`

export interface AsideImageProps {
    imageURL: SourceURL | string;
    blurURL: SourceURL | string;
    alt?: string;
}