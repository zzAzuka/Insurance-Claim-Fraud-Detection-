from fastapi import APIRouter, UploadFile, File
from schemas.parseOutputSchema import parseOutputSchema
from pypdf import PdfReader

router = APIRouter()

@router.post("/", response_model=parseOutputSchema)
async def parse_claim_file(input_file: UploadFile = File(...)):
    reader = PdfReader(input_file.file)
    pages = (len(reader.pages))
    return {"dateOfClaim": "Some Date", "carMake": "Some Make", "accidentArea": f"Pages are {pages}"}
  