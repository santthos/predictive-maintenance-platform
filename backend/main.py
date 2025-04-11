from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.ads_reader import read_ads_data
from backend.ml_model import predict_maintenance

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/live")
def live_data():
    return read_ads_data()

@app.get("/predict")
def prediction():
    data = read_ads_data()
    return {"prediction": predict_maintenance(data)}