import axios from 'axios';
import { API_BASE_URL } from './constants';
import { Match } from '@/models';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchMatches = async (): Promise<Match[]> => {
  try {
    const response = await apiClient.get('/fronttemp');
    return response.data.data.matches;
  } catch (error) {
    console.error('Error fetching sites:', error);
    throw error;
  }
};
