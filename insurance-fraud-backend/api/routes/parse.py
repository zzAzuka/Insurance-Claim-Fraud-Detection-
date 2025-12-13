from fastapi import APIRouter, UploadFile, File
from schemas.parseOutputSchema import parseOutputSchema
from prompts.systemPromptParse import systemPromptForParser as systemPrompt
from markitdown import MarkItDown
from ollama import chat, ChatResponse
from io import BytesIO

router = APIRouter()
md = MarkItDown()

@router.post("/", response_model=parseOutputSchema)
async def parse_claim_file(input_file: UploadFile = File(...)):
    file_bytes = await input_file.read()
    markdonwn = md.convert(BytesIO(file_bytes))
    response: ChatResponse = chat(model = "ministral-3:8b", messages=[
        {'role': 'system', 'content': systemPrompt},
        {'role': 'user', 'content': 'The following is a markdown representation of an insurance claim document:\n\n' + str(markdonwn)}
    ])
    extracted_data = response['message']['content']
    return {"dateOfClaim": "Some Date", "carMake": "Some Make", "accidentArea": f"Extracted JSON is {extracted_data}"}
  