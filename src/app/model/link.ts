export interface Link {
    id: number;
    description: string;
    url: string;
    linkCategory: {
        id: number,
        description: string;
    };
}
