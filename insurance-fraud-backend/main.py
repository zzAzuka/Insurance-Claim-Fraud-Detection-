from fastapi import FastAPI
from api.routes.parse import router as ParseRouter
app = FastAPI()

app.include_router(ParseRouter, prefix="/parser")

@app.get("/")
def read_root():
    return {"message":"Base endpoint of Insurance Fraud Detection Backend"}