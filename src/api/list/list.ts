import { Fork, ItemFork, ListItemType } from '../../models';
import { api } from '../index';

export const getAllByUser = (username: string): Promise<ListItemType[]> => {
  return api.get<ListItemType[]>(`/users/${username}/gists`).then(({ data }) => {
    return data;
  }).catch((data) => {
    throw data;
  });
};

export const getItem = (gistId: string): Promise<ItemFork> => {
  return api.get<ItemFork>(`/gists/${gistId}`).then(({ data }) => {
    return data;
  }).catch((data) => {
    throw data;
  });
};
