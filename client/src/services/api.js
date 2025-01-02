import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3000',
});

export const fetchText = async (reference) => {
  try {
    // Try to get from cache first
    const cached = await AsyncStorage.getItem(`text_${reference}`);
    if (cached) {
      return JSON.parse(cached);
    }

    const response = await api.get(`/api/texts/${reference}`);
    
    // Cache the response
    await AsyncStorage.setItem(
      `text_${reference}`,
      JSON.stringify(response.data)
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching text:', error);
    throw error;
  }
};

export const fetchCommentaries = async (reference) => {
  try {
    const response = await api.get(`/api/commentaries/${reference}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching commentaries:', error);
    throw error;
  }
};

export const getWordDefinition = async (word) => {
  try {
    const response = await api.get(`/api/define/${word}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching definition:', error);
    throw error;
  }
};