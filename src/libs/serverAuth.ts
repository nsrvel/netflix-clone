import { NextApiRequest } from 'next';
import { getSession } from 'next-auth/react';

import prismadb from '@/libs/prismadb';

const serverAuth = async (req: NextApiRequest) => {
    const session = await getSession({ req });

    console.log(session);
    console.log(session?.user);
    console.log(session?.user?.email);

    if (!session?.user?.email) {
        throw new Error('Not signed in');
    }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if (!currentUser) {
        throw new Error('Not signed in');
    }

    return { currentUser };
};

export default serverAuth;
