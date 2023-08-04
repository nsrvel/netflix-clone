import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useMovieList = () => {
    return useSWR('/api/movies', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
};

export default useMovieList;
