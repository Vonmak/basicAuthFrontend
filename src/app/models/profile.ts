import { User } from "./auth";

export interface Profile {
    id:number;
    bio:string;
    location:string;
    image:string;
    user: User
}
