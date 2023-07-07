import connectMongoDB from '../../../../libs/connectMongoDB';
import PostModel from '../../../../models/posts';
import { NextRequest, NextResponse } from 'next/server';



export async function GET(request: NextRequest, { params }: { params: { author: string } }) {

    try {

        const { author } = params

        console.log(params)

        await connectMongoDB()

        const posts = await PostModel.find({ author })
        if (!posts)
            return NextResponse.json({ message: "Post is not availble" }, { status: 406 })

        return NextResponse.json({ posts }, { status: 200 })

    } catch (error) {

        return NextResponse.json({ message: error }, { status: 500 })
    }
}

export async function PUT(request: NextRequest, { params }: { params: { postId: string } }) {
    const { postId } = params
    const { title, topic, content, author } = await request.json()
    const updatedData = { title, topic, content, author }
    console.log("----------->>>>>>>>>>", updatedData)

    await connectMongoDB()
    const data = await PostModel.findByIdAndUpdate(postId, updatedData)
    if (!data)
        return NextResponse.json({ message: "Post not available" }, { status: 406 })

    return NextResponse.json({ message: "Data updated" }, { status: 200 })
}
