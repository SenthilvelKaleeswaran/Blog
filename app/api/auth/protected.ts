import { NextApiRequest, NextApiResponse } from 'next';
import { handleProfile, withApiAuthRequired } from '@auth0/nextjs-auth0';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await handleProfile(req, res, {
            refetch: true,
            afterRefetch: async (_, __, session) => session,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
    }
};

export default withApiAuthRequired(handler);
