export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface Posts extends Array<Post> { }