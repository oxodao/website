import { ReactNode } from "react";

type Link = {
    name: string;
    url: string;
}

export type Project = {
    image: string;
    title: string;
    description: ReactNode;
    links: Link[];
    placeholder?: boolean;
}