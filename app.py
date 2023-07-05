from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from llama import Llama
from llama import GptClient
import uvicorn
import openai

app = FastAPI()


origins = [
    "http://127.0.0.1",
    "http://127.0.0.1:5173/",
    "*"  # Replace with the actual URL of your React app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# llama = Llama()
gptClient=GptClient()

@app.post('/chat')
async def chat(request: Request):
    print("HI")
    request_data = await request.json()
    model = request_data['model']
    prompt = request_data['prompt']
    openai_key = request_data['api_key']
    print(prompt)
    print(model)
    return gptClient.create_gpt(prompt=prompt)
    # return llama.llama_result(prompt=prompt)

if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
