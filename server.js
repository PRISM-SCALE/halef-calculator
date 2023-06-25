import express from "express";
// import services from "./data/services.json" assert { type: "json" };
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const services = require("./data/services.json");
const serviceDetails = require("./data/service_detail.json");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/services", (req, res) => {
  res.send(services);
});

app.get("/services/:id", (req, res) => {
  const serviceId = req.params.id;
  const result = serviceDetails.find((sd) => sd.serviceId == serviceId);
  res.send(result);
});

app.post("/services/:id/calculate", (req, res) => {
  const { distanceRange, distanceType, accomodationType, vehicle, packingType, isRequireInsurance, goodsValue } =
    req.body;
  //check isValidRange
  //check isValidVehicle
  //check isVehicleAllowed
  //check isValidPackingType
  //check isValidAccomodationType
  let transportaionCost = 0;
  let packingCost = 0;
  let insuranceCost = 0;
  let totalCost = 0;
  transportaionCost = getTransportCost(distanceRange, vehicle);
  packingCost = getPackagingCost(packingType, accomodationType);
  if (Boolean(isRequireInsurance)) {
    insuranceCost = 0.02 * goodsValue;
  }
  totalCost = transportaionCost + packingCost + insuranceCost;
  res.send({ currency: "INR", transportaionCost, packingCost, insuranceCost, totalCost });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const getTransportCost = (distanceRange, vehicle) => {
  let transportaionCost = 0;
  switch (distanceRange) {
    case "0-10":
      //Transportation cost from excel
      switch (vehicle) {
        case "TATA ACE":
          transportaionCost = 2500;
          break;
        case "BOLERO PICKUP":
          transportaionCost = 3000;
          break;
        case "TATA 407":
          transportaionCost = 4000;
          break;
        case "EICHER 14FT":
          transportaionCost = 5000;
          break;
        case "EICHER 17FT":
          transportaionCost = 6000;
          break;
        case "EICHER 18FT":
          transportaionCost = 6500;
          break;
        case "EICHER 19FT":
          transportaionCost = 7000;
          break;
        case "TATA 22FT":
          transportaionCost = 8000;
          break;
        case "CONTAINER 32FT SXL":
          transportaionCost = 9000;
          break;
        case "EICHER 40FT SXXL":
          transportaionCost = 10000;
          break;

        default:
          return res.send("INVALID VEHICLE!");
          break;
      }

      break;
    case "11-20":
      break;
    case "21-30":
      break;
    case "31-40":
      break;
    case "41-50":
      break;
    case "51-100":
      break;
    case "101-200":
      break;
    case "201-300":
      break;
    case "301-400":
      break;
    case "401-500":
      break;
    case "501-750":
      break;
    case "751-1000":
      break;
    case "1001-1250":
      break;
    case "1251-1500":
      break;
    case "1501-1750":
      break;
    case "1751-2000":
      break;
    case "2201-2500":
      break;
    case "2501-3000":
      break;

    default:
      break;
  }
  return transportaionCost;
};

const getPackagingCost = (packingType, accomodationType) => {
  let packingCost = 0;
  switch (accomodationType) {
    case "1RK":
      switch (packingType) {
        case "Not Required":
          packingCost = 500;
          break;
        case "Semi Packing":
          packingCost = 1000;
          break;
        case "Full Packing":
          packingCost = 1500;
          break;
        case "Fragile Packing":
          packingCost = 2000;
          break;
        default:
          break;
      }
      break;
    case "1BHK":
      switch (packingType) {
        case "Not Required":
          packingCost = 500;
          break;
        case "Semi Packing":
          packingCost = 2000;
          break;
        case "Full Packing":
          packingCost = 2500;
          break;
        case "Fragile Packing":
          packingCost = 3000;
          break;
        default:
          break;
      }
      break;
    case "2BHK":
      switch (packingType) {
        case "Not Required":
          packingCost = 1000;
          break;
        case "Semi Packing":
          packingCost = 3000;
          break;
        case "Full Packing":
          packingCost = 4000;
          break;
        case "Fragile Packing":
          packingCost = 4500;
          break;
        default:
          break;
      }
      break;
    case "3BHK":
      switch (packingType) {
        case "Not Required":
          packingCost = 1500;
          break;
        case "Semi Packing":
          packingCost = 4000;
          break;
        case "Full Packing":
          packingCost = 7000;
          break;
        case "Fragile Packing":
          packingCost = 5000;
          break;
        default:
          break;
      }
      break;
    case "4BHK":
      switch (packingType) {
        case "Not Required":
          packingCost = 2000;
          break;
        case "Semi Packing":
          packingCost = 5000;
          break;
        case "Full Packing":
          packingCost = 8000;
          break;
        case "Fragile Packing":
          packingCost = 6000;
          break;
        default:
          break;
      }
      break;
    case "5BHK":
      switch (packingType) {
        case "Not Required":
          packingCost = 2500;
          break;
        case "Semi Packing":
          packingCost = 6000;
          break;
        case "Full Packing":
          packingCost = 10000;
          break;
        case "Fragile Packing":
          packingCost = 7000;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  return packingCost;
};
