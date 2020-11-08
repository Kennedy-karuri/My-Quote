export class Quote {
    id: number;
    author : string;
    Description : string;
    user: string;
    day:Date;
    upvote: number;
    downvote: number;
    constructor(id: number, author: string, Description: string, user: string, day: Date) {
        this.id = id;
        this.author = author;
        this.Description = Description;
        this.user = user;
        this.day = day;
        this.upvote = 0;
        this.downvote =0;

    }
}

