import torch
import openai
from openai import util
import requests
from transformers import LlamaTokenizer, LlamaForCausalLM


class Llama:
    def __init__(self):
        self.model_path = 'openlm-research/open_llama_3b'
        # model_path = 'openlm-research/open_llama_7b'
        self.tokenizer = LlamaTokenizer.from_pretrained(self.model_path)
        self.model = LlamaForCausalLM.from_pretrained(
            self.model_path, torch_dtype=torch.float32,
        )
        print("Model loaded successfully ......")

    def llama_result(self, prompt: str) -> str:
        # prompt = 'Q: What is the largest animal?\nA:'
        input_ids = self.tokenizer(prompt, return_tensors="pt").input_ids
        input_ids = input_ids.to(torch.long)

        output = self.model.generate(
            input_ids=input_ids, max_new_tokens=32,
        )
        generation_output = self.tokenizer.decode(output[0], skip_special_tokens=True)
        return generation_output


class GptClient:
    def __init__(self):
            self.model_engine = "text-davinci-003"
            openai.api_key = "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"

    def create_gpt(self, prompt):
        response = openai.Completion.create(model="text-davinci-003",prompt=prompt, max_tokens=2048)
        return response.choices[0].text

