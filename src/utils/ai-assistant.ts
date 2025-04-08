
import { ChatMessage } from "@/types";

// Mock AI assistant functionality - in a real app, this would use an actual LLM API
const farmingKnowledgeBase = [
  { 
    keywords: ['npk', 'fertilizer', 'nutrients'], 
    response: "NPK stands for Nitrogen, Phosphorus, and Potassium - the three main nutrients required for plant growth. Nitrogen promotes leaf growth, phosphorus helps with root and flower development, and potassium contributes to overall plant health and disease resistance." 
  },
  { 
    keywords: ['soil', 'ph', 'acidity', 'alkaline'], 
    response: "Soil pH is a measure of how acidic or alkaline your soil is. Most crops prefer a slightly acidic to neutral pH (6.0-7.0). If your soil is too acidic, you can add lime; if it's too alkaline, you might add sulfur or organic matter to lower the pH." 
  },
  {
    keywords: ['moisture', 'water', 'irrigation', 'drought'],
    response: "Proper soil moisture is critical for crop health. Too little water can cause drought stress, while too much can lead to root diseases and nutrient leaching. The AgroSense rover measures soil moisture at multiple points to help you optimize irrigation timing and amounts."
  },
  {
    keywords: ['temperature', 'heat', 'cold', 'frost'],
    response: "Soil temperature affects seed germination, root growth, and nutrient uptake. Different crops have different optimal soil temperature ranges. The AgroSense rover's temperature sensors help you monitor conditions to determine the best planting times and detect potential stress conditions."
  },
  {
    keywords: ['crops', 'planting', 'season', 'rotation'],
    response: "Crop rotation is an important practice for maintaining soil health and preventing pest buildups. By analyzing soil data from the AgroSense rover, you can make informed decisions about which crops would perform best in different parts of your field."
  },
  {
    keywords: ['rover', 'agrosense', 'how', 'work'],
    response: "The AgroSense rover is an autonomous or manually-controlled device equipped with sensors to measure soil NPK, pH, electrical conductivity, moisture, air quality, sunlight, temperature, and humidity. It travels across your fields, taking measurements every 200-500m, and sends this data to the cloud for easy access through our platform."
  }
];

export const generateAIResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  // Check for matches in knowledge base
  for (const item of farmingKnowledgeBase) {
    if (item.keywords.some(keyword => message.includes(keyword))) {
      return item.response;
    }
  }
  
  // Default response if no specific match
  return "I'm your AgroSense AI assistant. I can help you understand your soil data and provide farming recommendations. Could you please ask about specific soil parameters like NPK levels, pH, moisture, temperature, or how to interpret your data?";
};

let chatHistory: ChatMessage[] = [];

export const getChatHistory = (): ChatMessage[] => {
  return chatHistory;
};

export const addMessageToChat = (message: Omit<ChatMessage, 'id' | 'timestamp'>): ChatMessage => {
  const newMessage: ChatMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    timestamp: new Date().toISOString(),
    ...message
  };
  
  chatHistory = [...chatHistory, newMessage];
  return newMessage;
};

export const clearChatHistory = () => {
  chatHistory = [];
};

export const processChatMessage = (userMessage: string): ChatMessage => {
  // Add user message to history
  const userChatMessage = addMessageToChat({
    role: 'user',
    content: userMessage
  });
  
  // Generate AI response
  const aiResponse = generateAIResponse(userMessage);
  
  // Add AI response to history
  const aiChatMessage = addMessageToChat({
    role: 'assistant',
    content: aiResponse
  });
  
  return aiChatMessage;
};
