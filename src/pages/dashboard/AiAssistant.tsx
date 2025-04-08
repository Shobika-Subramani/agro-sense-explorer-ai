
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addMessageToChat, getChatHistory, processChatMessage } from "@/utils/ai-assistant";
import { Leaf, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AiAssistant = () => {
  const [input, setInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const chatHistoryRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState(getChatHistory());
  
  useEffect(() => {
    // Add a welcome message if the chat history is empty
    if (chatHistory.length === 0) {
      const aiMessage = addMessageToChat({
        role: 'assistant',
        content: "Hello! I'm your AgroSense AI assistant. I can help you understand your soil data and provide farming recommendations. How can I assist you today?"
      });
      setChatHistory([aiMessage]);
    }
  }, []);
  
  useEffect(() => {
    // Scroll to bottom of chat when history changes
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Add user message to the chat
    const userMessage = addMessageToChat({
      role: 'user',
      content: input
    });
    
    // Update state with user message
    setChatHistory(prev => [...prev, userMessage]);
    setInput("");
    
    // Process the user's message and get AI response
    setTimeout(() => {
      const aiMessage = processChatMessage(userMessage.content);
      setChatHistory(prev => [...prev, aiMessage]);
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-agro-green-dark tracking-tight">AI Assistant</h1>
          <p className="text-muted-foreground">Ask questions about your soil data and get farming recommendations</p>
        </div>
        
        <div className="bg-white rounded-lg border border-border h-[calc(100vh-300px)] flex flex-col">
          {/* Chat History */}
          <div 
            ref={chatHistoryRef} 
            className="flex-grow p-4 overflow-y-auto space-y-4"
          >
            {chatHistory.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user' 
                      ? 'flex-row-reverse space-x-reverse' 
                      : 'flex-row'
                  }`}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user' 
                        ? 'bg-agro-blue text-white' 
                        : 'bg-agro-green-dark text-white'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <span className="text-sm">You</span>
                    ) : (
                      <Leaf className="h-4 w-4" />
                    )}
                  </div>
                  <div 
                    className={`p-3 rounded-lg ${
                      message.role === 'user' 
                        ? 'bg-agro-blue/10 text-foreground' 
                        : 'bg-agro-green-light/10 text-foreground'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isSubmitting && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-agro-green-dark text-white flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-4 w-4" />
                  </div>
                  <div className="p-3 rounded-lg bg-agro-green-light/10">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-agro-green-dark rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-agro-green-dark rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      <div className="w-2 h-2 bg-agro-green-dark rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input Form */}
          <div className="border-t border-border p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                disabled={isSubmitting}
                className="flex-grow"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting || !input.trim()} 
                className="bg-agro-green-dark hover:bg-agro-green-dark/90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
            <div className="text-xs text-muted-foreground mt-2">
              Try asking about: NPK levels, pH balance, soil moisture, crop recommendations
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiAssistant;
