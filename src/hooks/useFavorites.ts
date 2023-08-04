import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useFavorites = () => {
    return useSWR('/api/favorites', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
};

export default useFavorites;
