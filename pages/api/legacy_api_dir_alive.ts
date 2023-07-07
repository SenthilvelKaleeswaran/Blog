import { NextApiRequest, NextApiResponse } from "next";

export default function read(req: NextApiRequest, res: NextApiResponse) {
    console.log(req,res)
    res.status(200).json({ message: 'Working' })
}