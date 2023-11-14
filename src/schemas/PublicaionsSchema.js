import z, { string } from 'zod';

const publicationScheme = z.object({
    fullName:string(),
    nickName:string(),
    photoURL:string().url(),
    post:{
        content:string().maxLength(280),
        imageUrl:string().url()
    }
})