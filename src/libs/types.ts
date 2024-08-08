// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    map(arg0: (reply: ReplyProps) => import("react").JSX.Element): import("react").ReactNode;
    username: string;
    userImagePath: string;
    replyText: string;
    likeNum: number;
}
export type { ReplyProps };

interface PostOwnerProps {
    ImagePath: string;
    username: string;
    postTitle:string;
    likes:number;
}
export type { PostOwnerProps };

interface CommentProps {
    userImagePath: string;
    username: string;
    commentText:string;
    likeNum:number;
    replies:ReplyProps;
}
export type { CommentProps };
