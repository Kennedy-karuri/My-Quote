export class Quote {
    id: number;
    author : string;
    description : string;
    user: string;
    day:Date;
    upvote: number;
    downvote: number;
    constructor(id: number, author: string, description: string, user: string, day: Date) {
        this.id = id;
        this.author = author;
        this.description = description;
        this.user = user;
        this.day = day;
        this.upvote = 0;
        this.downvote =0;

    }
}

