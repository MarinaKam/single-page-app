import { createContext, useState } from 'react';
import { getAllByUser, getItem } from '../../../api/list';
import { ItemFork, ListItemType } from '../../../models';

export interface GlobalContextInterface {
  isFetched: boolean;
  isItemFetched: boolean;
  error: string | null;
  itemError: string | null;
  list: ListItemType[];
  itemData: ItemFork | null;
  fetchList: (val: string) => void;
  fetchItem: (val: string) => void;
}

export const contextInitialValues = {
  isFetched: false,
  isItemFetched: false,
  error: null,
  itemError: null,
  list: [],
  itemData: null,
  fetchList: () => {},
  fetchItem: () => {}
};

export const GlobalContext = createContext<GlobalContextInterface>(contextInitialValues);

export const GlobalProvider = ({ children }: any) => {
  const [ list, setList ] = useState<ListItemType[]>([]);
  const [ itemData, setItemData ] = useState<ItemFork | null>(null);
  const [ error, setError ] = useState<string | null>(null);
  const [ itemError, setItemError ] = useState<string | null>(null);
  const [ isFetched, setIsFetched ] = useState<boolean>(false);
  const [ isItemFetched, setIsItemFetched ] = useState<boolean>(false);

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

  const fetchItem = (id: string) => {
    setIsItemFetched(true);
    setItemError(null);

    getItem(id).then((data) => {
      if (!data?.id) {
        setItemError('No forks yet');
      }

      setItemData(data);
      setIsItemFetched(false);
    }).catch((error) => {
      if (error) {
        setItemError('Something went wrong, try again later');
        setIsItemFetched(false);
      }
    });
  };

  const value = {
    isFetched,
    isItemFetched,
    error,
    list,
    itemData,
    itemError,

    // functions
    fetchList,
    fetchItem
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
