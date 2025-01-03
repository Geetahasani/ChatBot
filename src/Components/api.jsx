import axios from "axios";

const API_URL = "https://demo-deployment-latest-muxb.onrender.com/api/qna/ask";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(
            API_URL,
            { question },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true, // Use this if the server requires cookies
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        throw error;
    }
};
