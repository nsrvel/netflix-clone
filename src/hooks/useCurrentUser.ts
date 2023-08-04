import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
    return useSWR('/api/current', fetcher);
};

export default useCurrentUser;
