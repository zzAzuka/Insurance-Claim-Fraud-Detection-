from pydantic import BaseModel

class parseOutputSchema(BaseModel):
    dateOfClaim: str
    carMake: str
    accidentArea: str