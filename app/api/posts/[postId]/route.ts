import connectMongoDB from "@/libs/connectMongoDB"
import PostModel from "@/models/posts"
import mongoose from "mongoose"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { postId: string } }) {

    try {
        
        let { postId } = params
        console.log("------>>>>>>----->>.",postId)
        await connectMongoDB()
    
        const post = await PostModel.findById(postId)
    
        if(!post)
            return NextResponse.json({ message : "Post is not availble"}, { status: 406 })
    
        return NextResponse.json({ post }, { status: 200 })

    } catch (error) {

        return NextResponse.json({ message: error }, { status: 500 })        
    }
}


export async function DELETE(request: NextRequest, { params }: { params: { postId: string } }) {

    try {
        const { postId } = params
        await connectMongoDB()

        const data  = await PostModel.findByIdAndDelete(postId)
        console.log("<<<<<<<",data)

        if(!data)
            return NextResponse.json({message: "Post not available"}, {status:406})

        return NextResponse.json({ message: "Post deleted" }, { status: 200 })
        
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