export interface BoardMember {
    id: number;
    firstName: string;
    lastName: string;
    title?: string;
    description?: string;
    prefix?: string;
    email?: string;
    sortPriority?: number;
    enabled: boolean;
    showEmail: boolean;
    boardMemberCategory: {
        id: number,
        description: string
    };
}