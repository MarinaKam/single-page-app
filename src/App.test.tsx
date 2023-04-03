import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from './components/SearchBar';
import { gistResponse, nockPreset } from './mocks';
import { contextInitialValues, GlobalContext, Main } from './app/Main';
import App from './app/App';

const waitSec = (sec: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, sec * 1000));

const mockOnChange = jest.fn();
const providerValue = {
  ...contextInitialValues,
  isFetched: true
};

test('<App>', () => {
  render(<App />);

  expect(screen.getByTestId('list-wrapper')).toBeDefined();
  expect(screen.getByTestId('list-wrapper')).toBeEmptyDOMElement();
  expect(screen.queryByTestId('loader-wrapper')).toBeNull();
});

describe('Main Component', () => {
  test('<SearchBar>', () => {
    render(<SearchBar onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText(/Search By Username/i) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'some value' } });

    expect(input?.value).toEqual('some value');

    const searchButton = screen.getByTestId('search-button');

    fireEvent.click(searchButton);

    expect(mockOnChange).toHaveBeenCalled();
  });

  test('Without data', async () => {
    render(
      <GlobalContext.Provider value={providerValue}>
        <App />
      </GlobalContext.Provider>
    );

    expect(await screen.queryByTestId(/loader-wrapper/)).toBeNull();
    expect(await screen.queryByTestId(/error-wrapper/)).toBeNull();
    expect(await screen.queryByTestId(/list-item/)).toBeNull();
  });

  test('With loader', async () => {
    nockPreset.nockGistsList('user');
    await waitSec(2);

    render(
      <GlobalContext.Provider value={{ ...providerValue, isFetched: true, list: gistResponse }}>
        <Main />
      </GlobalContext.Provider>
    );

    expect(await screen.queryByTestId(/loader-wrapper/)).toBeInTheDocument();
    expect(await screen.queryByTestId(/error-wrapper/)).toBeNull();
    expect(await screen.queryAllByTestId(/list-item/)).toHaveLength(0);
  });

  test('With data', async () => {
    nockPreset.nockGistsList('user');
    await waitSec(2);

    render(
      <GlobalContext.Provider value={{ ...providerValue, isFetched: false, list: gistResponse }}>
        <Main />
      </GlobalContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/This script has been integrated into SteamDB browser extension/)).toBeInTheDocument();
    });

    expect(await screen.queryByTestId(/loader-wrapper/)).toBeNull();
    expect(await screen.queryByTestId(/error-wrapper/)).toBeNull();
    expect(await screen.queryAllByTestId(/list-item/)).toHaveLength(5);
  });

  test('With error', async () => {
    nockPreset.nockError();
    await waitSec(2);
    render(<Main />);

    expect(screen.getByTestId('list-wrapper')).toBeEmptyDOMElement();
  });
});
