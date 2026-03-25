import { StaticImageData } from "next/image";

export interface HeroData {
    text1: string
    text2: string
  }

  export interface HomePageProps {
    heroCount: number;
    heroData: HeroData;
    setHeroCount: React.Dispatch<React.SetStateAction<number>>;
  }

  export interface StatProps {
    start: number;
    end: number;
    title: string;
  }

  export interface CardProps {
    icon: StaticImageData;
    cardTitle: string;
    cardParagraph: string;
  }