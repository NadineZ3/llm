import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {MainContainer , ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import axios from "axios"

function App() {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello!",
      sender: "llm"
    }
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender:"user",
      direction:"outgoing"
    }

  const newMessages = [...messages, newMessage];

  //update our messages state
  setMessages(newMessages);
  
  setTyping(true);
  let result = await processMessageTollm(newMessage);
  console.log(messages)
  setMessages([...newMessages,result])
  setTyping(false);
  };

  async function processMessageTollm(chatMessages){
    console.log(chatMessages)
    let apiMessages =  chatMessages.message 


    const apiRequestBody = {
      "api_key": "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",
      "model": "text-davinci-003",
      "prompt": [
        apiMessages // The messages from our chat with ChatGPT
      ]
    }

    var raw = JSON.stringify(apiRequestBody);

    let config = {
      url: 'http://127.0.0.1:8000/chat',
      headers: {
        'Access-Control-Allow-Origin': ["*"],
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true'
      },
      method: "post",
      data : raw,
      };
      console.log(config)
      let response = await axios.request(config);
      console.log(response)
      return {"message":response.data,"sender":"llm"}

    //process message to chatGPT (send it over and see the response)
};

  return (
    <div className='App'>
      <div style= {{ position: 'relative', height:'500px', width:'600px'}}>
        <MainContainer>
          <ChatContainer>
            <MessageList
            typingIndicator={typing? <TypingIndicator content="llm is typing" /> : null }
            >
              {messages.map((message, i)=>{
                return <Message key={i} model={message}>

                </Message>
              })}
            </MessageList>
            <MessageInput placeholder = "Type message here" onSend={handleSend}>
              
            </MessageInput> 
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}

export default App
