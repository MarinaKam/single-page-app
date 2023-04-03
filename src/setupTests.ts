// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import dotenv from 'dotenv';
import * as nock from 'nock';

nock.disableNetConnect();

afterEach(() => {
  nock.cleanAll();
  jest.clearAllMocks();
});

jest.spyOn(console, 'error').mockImplementation();

if (process.env.SILENT_TEST) {
  jest.spyOn(console, 'log').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
}

dotenv.config({ path: '.env' });

