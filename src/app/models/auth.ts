export interface signupModel{
    email: string,
    username: string,
    name: string,
    password: string,
    // roles:[]
}

export interface AuthResData{
    // user_id:number,
    id: number,
    email: string,
    name?: string,
    username: string,
    token?: string
}

export interface loginModel{
    username: string,
    password: string
}

export class User{
    constructor(
       
        public id: number,
        public email: string,
        public username: string,
        public name?: string,
        public token?: string,
        // public user_id:number,
    ){}
    
}