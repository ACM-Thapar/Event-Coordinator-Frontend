import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {axios} from 'axios';

const customFetch = axios.create ({
  baseURL: 'http://localhost:5000/api',
});

export const useFetchEvents = () => {
  const {isLoading, isError, error, data} = useQuery ({
    queryKey: ['events'],
    queryFn: async () => {
      const {data} = await customFetch ('/');
      return data;
    },
  });
  return {isLoading, isError, error, data};
};

export const useCreateEvents = () => {
  const queryClient = useQueryClient ();

  const {mutate: createEvents, isLoading} = useMutation ({
    mutationFn: event => customFetch.post ('/', event),
    onSuccess: () => {
      queryClient.invalidateQueries ({queryKey: ['events']});
    },
    onError: () => {
      console.log ('error');
    },
  });
  return {createEvents, isLoading};
};

export const useEditEvents = () => {
  const queryClient = useQueryClient ();

  const {mutate: editEvents} = useMutation ({
    mutationFn: event => {
      return customFetch.patch (`/${event.eventID}`, event);
    },
    onSuccess: () => {
      queryClient.invalidateQueries ({queryKey: ['events']});
    },
  });
  return {editEvents};
};

export const useDeleteEvents = () => {
  const queryClient = useQueryClient ();

  const {mutate: deleteEvent, isLoading} = useMutation ({
    mutationFn: event => {
      return customFetch.delete (`/${event.eventID}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries ({queryKey: ['events']});
    },
  });
  return {deleteEvent, isLoading};
};
