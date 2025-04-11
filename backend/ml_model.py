def predict_maintenance(sensor_data):
    if sensor_data["sensor1"] > 80:
        return "Maintenance required soon"
    return "System OK"