import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useBillboard = () => {
    return useSWR('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
    });
};

export default useBillboard;
