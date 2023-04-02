import { api } from '../index';

export const getAllByUser = (username: string) => {
  // TODO: add type
  return api.get<any>(`/users/${username}/gists`).then(({ data }) => {
    return data;
  }).catch(({ data }) => {
    throw data;
  });
};

export const getItem = (gistId: string) => {
  // TODO: add type
  return api.get<any>(`/gists${gistId}`).then(({ data }) => {
    return data;
  }).catch(({ data }) => {
    throw data;
  });
};
