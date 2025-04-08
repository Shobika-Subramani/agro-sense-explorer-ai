
import { Farm, SoilData } from "@/types";

// Mock data for the application - in a real app, this would come from ThingSpeak or another API
export const generateMockSoilData = (count: number, farmId: string): SoilData[] => {
  const data: SoilData[] = [];
  
  const now = new Date();
  
  for (let i = 0; i < count; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    
    data.push({
      id: `soil-${farmId}-${i}`,
      timestamp: date.toISOString(),
      location: {
        latitude: 28.6139 + (Math.random() - 0.5) * 0.02,
        longitude: 77.2090 + (Math.random() - 0.5) * 0.02,
        name: `Location ${i+1}`
      },
      npk: {
        nitrogen: 20 + Math.random() * 60,
        phosphorus: 10 + Math.random() * 30,
        potassium: 30 + Math.random() * 40
      },
      ph: 5.5 + Math.random() * 3,
      ec: 0.2 + Math.random() * 1.5,
      moisture: 20 + Math.random() * 60,
      temperature: 15 + Math.random() * 15,
      humidity: 40 + Math.random() * 40,
      airQuality: 50 + Math.random() * 50,
      sunlight: 70 + Math.random() * 30
    });
  }
  
  return data;
};

export const mockFarms: Farm[] = [
  {
    id: '101',
    name: 'Green Acres Farm',
    ownerId: '1',
    location: {
      address: '123 Farm Road',
      city: 'Agriville',
      state: 'Punjab',
      country: 'India',
      latitude: 28.6139,
      longitude: 77.2090
    },
    size: 25.5,
    crops: ['Wheat', 'Rice', 'Maize']
  },
  {
    id: '102',
    name: 'Sunshine Orchard',
    ownerId: '4',
    location: {
      address: '456 Orchard Lane',
      city: 'Fruitdale',
      state: 'Maharashtra',
      country: 'India',
      latitude: 19.0760,
      longitude: 72.8777
    },
    size: 15.2,
    crops: ['Mango', 'Banana', 'Papaya']
  }
];

export const getFarmById = (farmId: string): Farm | undefined => {
  return mockFarms.find(farm => farm.id === farmId);
};

export const getFarmsByOwnerId = (ownerId: string): Farm[] => {
  return mockFarms.filter(farm => farm.ownerId === ownerId);
};

export const getSoilDataForFarm = (farmId: string): SoilData[] => {
  return generateMockSoilData(10, farmId);
};

export const getSoilDataForAllFarms = (): Record<string, SoilData[]> => {
  const result: Record<string, SoilData[]> = {};
  
  mockFarms.forEach(farm => {
    result[farm.id] = generateMockSoilData(10, farm.id);
  });
  
  return result;
};

export const getLatestSoilData = (farmId: string): SoilData | null => {
  const data = generateMockSoilData(1, farmId);
  return data.length > 0 ? data[0] : null;
};

export const getDataRecommendations = (data: SoilData): string[] => {
  const recommendations: string[] = [];
  
  // NPK analysis
  if (data.npk.nitrogen < 30) {
    recommendations.push("Low nitrogen levels detected. Consider applying nitrogen-rich fertilizers like urea or ammonium sulfate.");
  }
  
  if (data.npk.phosphorus < 15) {
    recommendations.push("Phosphorus deficiency detected. Consider applying rock phosphate or DAP fertilizer.");
  }
  
  if (data.npk.potassium < 35) {
    recommendations.push("Low potassium levels. Consider applying potash or potassium sulfate fertilizer.");
  }
  
  // pH analysis
  if (data.ph < 6.0) {
    recommendations.push("Soil is acidic. Consider applying agricultural lime to increase pH.");
  } else if (data.ph > 7.5) {
    recommendations.push("Soil is alkaline. Consider applying gypsum or elemental sulfur to decrease pH.");
  }
  
  // Moisture analysis
  if (data.moisture < 30) {
    recommendations.push("Soil moisture is low. Consider irrigation or water conservation methods like mulching.");
  } else if (data.moisture > 70) {
    recommendations.push("Soil moisture is high. Consider improving drainage or reducing irrigation.");
  }
  
  return recommendations;
};
