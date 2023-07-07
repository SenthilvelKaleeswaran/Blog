import connectMongoDB from '../../../libs/connectMongoDB';
import PostModel from '../../../models/posts';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  await connectMongoDB();
  const { title, topic, content, author } = await request.json();
  console.log("-------->>>>>>>",author)

  const postData = { title, topic, content, author };
  const posts = await PostModel.create(postData);

  return NextResponse.json({ posts }, {status:200});
}


export async function GET() {
    await connectMongoDB();
    const posts = await PostModel.find();

    return NextResponse.json({ posts });
}
