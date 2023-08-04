import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useMovie = (id?: string) => {
    return useSWR(id ? `/api/movies/${id}` : null, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
};

export default useMovie;
