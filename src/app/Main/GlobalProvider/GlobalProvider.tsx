import { createContext, useState } from 'react';
import { getAllByUser } from '../../../api/list';
import { ListItemType } from '../../../models';

export interface GlobalContextInterface {
  isFetched: boolean;
  error: string | null;
  list: ListItemType[];
  fetchList: (val: string) => void;
}

export const contextInitialValues = {
  isFetched: false,
  error: null,
  list: [],
  fetchList: () => {}
};

export const GlobalContext = createContext<GlobalContextInterface>(contextInitialValues);

export const GlobalProvider = ({ children }: any) => {
  const [ list, setList ] = useState<ListItemType[]>([]);
  const [ error, setError ] = useState<string | null>(null);
  const [ isFetched, setIsFetched ] = useState<boolean>(false);

  const fetchList = (username: string) => {
    setIsFetched(true);
    setError(null);

    getAllByUser(username).then((data) => {
      if (!data.length) {
        setError('No data for this User');
      }

      setList(data);
      setIsFetched(false);
    }).catch((error) => {
      if (error) {
        setError('Please Enter Valid UserName');
        setIsFetched(false);
      }
    });
  };

  const value = {
    isFetched,
    error,
    list,

    // functions
    fetchList
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
