// api.jsx
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://demo-deployment-latest-muxb.onrender.com',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: false  // Change this to false
});

export const sendQuestion = async (question) => {
    try {
        const response = await api.post('/api/qna/ask', { question });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};