export interface RootType {
    currentUser: User;
    comments: Comment[];
}

export interface Comment {
    id: number;
    content: string;
    createdAt: string | number;
    score: number;
    user: User;
    replies?: Comment[];
    replyingTo?: string;
}

export interface User {
    image?: Image;
    username: string;
}

export interface Image {
    png: string;
    webp: string;
}

export enum CommentType {
    Comment,
    Reply
}
