import prismadb from '@/libs/prismadb';
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end();
    }

    try {
        await serverAuth(req, res);

        const { movieId } = req.query;

        if (typeof movieId !== 'string') {
            throw new Error('Invalid ID');
        }

        if (!movieId) {
            throw new Error('Invalid ID');
        }

        const movie = await prismadb.movie.findUnique({
            where: {
                id: movieId,
            },
        });

        if (!movie) {
            throw new Error('Invalid ID');
        }

        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).end();
    }
}
