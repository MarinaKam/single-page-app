import axios from 'axios';
import { api } from './index';

api.CancelToken = axios.CancelToken;
api.isCancel = axios.isCancel;
