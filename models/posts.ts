import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    title: string
    topic:string
    content: string
    author: string
    createdAt: Date
    updatedAt: Date
}

const postSchema: Schema<IPost> = new Schema(
    {
        title: { type: String, required: true },
        topic: { type: String, required: true },
        content: { type: String, required: true },
        author: { type: String ,required:true},
        
    },
    {timestamps:true});

const PostModel = mongoose.models.Post || mongoose.model<IPost>('Post', postSchema)

export default PostModel
