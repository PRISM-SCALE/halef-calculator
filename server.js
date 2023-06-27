import express from "express";
import cors from "cors";
// import services from "./data/services.json" assert { type: "json" };
import {createRequire} from "module";
const require = createRequire(import.meta.url);
const services = require("./data/services.json");
const serviceDetails = require("./data/service_detail.json");

const app = express();
app.use(express.json());

app.use(cors({origin: "http://localhost:8080"}));

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
	let service = services?.find((s) => s.id === Number(req.params.id));
	if (!Boolean(service))
		res.status(400).send({
			error: "invalid input",
			errorMessage: `Service ID is invalid`,
		});

	switch (service?.code) {
		case "RELOCATION_PACK_MOVE":
			GetRelocationQuote(req, res, service?.id);
			break;
		case "COURIER_CARGO":
			GetCourierCargoQuote(req, res, service?.id);
			break;
		case "TRUCKING":
			break;
		case "WARE_HOUSE":
			break;
		case "AIR_AMBULANCE":
			break;
		default:
			return res.status(400).send({
				error: "invalid input",
				errorMessage: `invalid service or service not found`,
			});
	}
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
				case "CONTAINER 40FT SXXL":
					transportaionCost = 10000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}

			break;
		case "11-20":
			//Transportation cost from excel
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 3000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 3500;
					break;
				case "TATA 407":
					transportaionCost = 4500;
					break;
				case "EICHER 14FT":
					transportaionCost = 5500;
					break;
				case "EICHER 17FT":
					transportaionCost = 6500;
					break;
				case "EICHER 18FT":
					transportaionCost = 7000;
					break;
				case "EICHER 19FT":
					transportaionCost = 7500;
					break;
				case "TATA 22FT":
					transportaionCost = 8500;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 9500;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 10500;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}

			break;
		case "21-30":
			//Transportation cost from excel
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 3500;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 4000;
					break;
				case "TATA 407":
					transportaionCost = 5000;
					break;
				case "EICHER 14FT":
					transportaionCost = 6000;
					break;
				case "EICHER 17FT":
					transportaionCost = 7000;
					break;
				case "EICHER 18FT":
					transportaionCost = 7500;
					break;
				case "EICHER 19FT":
					transportaionCost = 8000;
					break;
				case "TATA 22FT":
					transportaionCost = 9000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 10000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 11000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}

			break;
		case "31-40":
			//Transportation cost from excel
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 4000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 4500;
					break;
				case "TATA 407":
					transportaionCost = 5500;
					break;
				case "EICHER 14FT":
					transportaionCost = 6500;
					break;
				case "EICHER 17FT":
					transportaionCost = 7500;
					break;
				case "EICHER 18FT":
					transportaionCost = 8000;
					break;
				case "EICHER 19FT":
					transportaionCost = 8500;
					break;
				case "TATA 22FT":
					transportaionCost = 9500;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 10500;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 11500;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}

			break;
		case "41-50":
			//Transportation cost from excel
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 5000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 5500;
					break;
				case "TATA 407":
					transportaionCost = 6500;
					break;
				case "EICHER 14FT":
					transportaionCost = 7500;
					break;
				case "EICHER 17FT":
					transportaionCost = 8000;
					break;
				case "EICHER 18FT":
					transportaionCost = 8500;
					break;
				case "EICHER 19FT":
					transportaionCost = 9000;
					break;
				case "TATA 22FT":
					transportaionCost = 10000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 11000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 12000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}

			break;
		case "51-100":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 6000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 7000;
					break;
				case "TATA 407":
					transportaionCost = 9000;
					break;
				case "EICHER 14FT":
					transportaionCost = 10000;
					break;
				case "EICHER 17FT":
					transportaionCost = 12000;
					break;
				case "EICHER 18FT":
					transportaionCost = 12000;
					break;
				case "EICHER 19FT":
					transportaionCost = 12000;
					break;
				case "TATA 22FT":
					transportaionCost = 12500;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 15000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 16000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "101-200":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 10000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 12000;
					break;
				case "TATA 407":
					transportaionCost = 14000;
					break;
				case "EICHER 14FT":
					transportaionCost = 15000;
					break;
				case "EICHER 17FT":
					transportaionCost = 18000;
					break;
				case "EICHER 18FT":
					transportaionCost = 18000;
					break;
				case "EICHER 19FT":
					transportaionCost = 18000;
					break;
				case "TATA 22FT":
					transportaionCost = 18500;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 20000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 22000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "201-300":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 12500;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 14000;
					break;
				case "TATA 407":
					transportaionCost = 16000;
					break;
				case "EICHER 14FT":
					transportaionCost = 20000;
					break;
				case "EICHER 17FT":
					transportaionCost = 25000;
					break;
				case "EICHER 18FT":
					transportaionCost = 25000;
					break;
				case "EICHER 19FT":
					transportaionCost = 25000;
					break;
				case "TATA 22FT":
					transportaionCost = 26000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 28000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 30000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "301-400":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 15000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 15000;
					break;
				case "TATA 407":
					transportaionCost = 18000;
					break;
				case "EICHER 14FT":
					transportaionCost = 22000;
					break;
				case "EICHER 17FT":
					transportaionCost = 28000;
					break;
				case "EICHER 18FT":
					transportaionCost = 28000;
					break;
				case "EICHER 19FT":
					transportaionCost = 28000;
					break;
				case "TATA 22FT":
					transportaionCost = 28500;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 30000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 32000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "401-500":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 17500;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 20000;
					break;
				case "TATA 407":
					transportaionCost = 22000;
					break;
				case "EICHER 14FT":
					transportaionCost = 25000;
					break;
				case "EICHER 17FT":
					transportaionCost = 32000;
					break;
				case "EICHER 18FT":
					transportaionCost = 32000;
					break;
				case "EICHER 19FT":
					transportaionCost = 32000;
					break;
				case "TATA 22FT":
					transportaionCost = 32500;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 35000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 38000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "501-750":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 20000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 25000;
					break;
				case "TATA 407":
					transportaionCost = 28000;
					break;
				case "EICHER 14FT":
					transportaionCost = 30000;
					break;
				case "EICHER 17FT":
					transportaionCost = 40000;
					break;
				case "EICHER 18FT":
					transportaionCost = 40000;
					break;
				case "EICHER 19FT":
					transportaionCost = 40000;
					break;
				case "TATA 22FT":
					transportaionCost = 42000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 45000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 48000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "751-1000":
			switch (vehicle) {
				case "TATA ACE":
					transportaionCost = 25000;
					break;
				case "BOLERO PICKUP":
					transportaionCost = 30000;
					break;
				case "TATA 407":
					transportaionCost = 35000;
					break;
				case "EICHER 14FT":
					transportaionCost = 40000;
					break;
				case "EICHER 17FT":
					transportaionCost = 45000;
					break;
				case "EICHER 18FT":
					transportaionCost = 45000;
					break;
				case "EICHER 19FT":
					transportaionCost = 45000;
					break;
				case "TATA 22FT":
					transportaionCost = 48000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 50000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 52000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "1001-1250":
			switch (vehicle) {
				case "BOLERO PICKUP":
					transportaionCost = 35000;
					break;
				case "TATA 407":
					transportaionCost = 40000;
					break;
				case "EICHER 14FT":
					transportaionCost = 45000;
					break;
				case "EICHER 17FT":
					transportaionCost = 50000;
					break;
				case "EICHER 18FT":
					transportaionCost = 50000;
					break;
				case "EICHER 19FT":
					transportaionCost = 50000;
					break;
				case "TATA 22FT":
					transportaionCost = 52000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 55000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 58000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "1251-1500":
			switch (vehicle) {
				case "BOLERO PICKUP":
					transportaionCost = 40000;
					break;
				case "TATA 407":
					transportaionCost = 45000;
					break;
				case "EICHER 14FT":
					transportaionCost = 50000;
					break;
				case "EICHER 17FT":
					transportaionCost = 55000;
					break;
				case "EICHER 18FT":
					transportaionCost = 55000;
					break;
				case "EICHER 19FT":
					transportaionCost = 55000;
					break;
				case "TATA 22FT":
					transportaionCost = 58000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 60000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 62000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "1501-1750":
			switch (vehicle) {
				case "BOLERO PICKUP":
					transportaionCost = 45000;
					break;
				case "TATA 407":
					transportaionCost = 50000;
					break;
				case "EICHER 14FT":
					transportaionCost = 55000;
					break;
				case "EICHER 17FT":
					transportaionCost = 60000;
					break;
				case "EICHER 18FT":
					transportaionCost = 60000;
					break;
				case "EICHER 19FT":
					transportaionCost = 60000;
					break;
				case "TATA 22FT":
					transportaionCost = 62000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 65000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 68000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "1751-2000":
			switch (vehicle) {
				case "BOLERO PICKUP":
					transportaionCost = 50000;
					break;
				case "TATA 407":
					transportaionCost = 55000;
					break;
				case "EICHER 14FT":
					transportaionCost = 60000;
					break;
				case "EICHER 17FT":
					transportaionCost = 70000;
					break;
				case "EICHER 18FT":
					transportaionCost = 65000;
					break;
				case "EICHER 19FT":
					transportaionCost = 65000;
					break;
				case "TATA 22FT":
					transportaionCost = 68000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 70000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 75000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "2201-2500":
			switch (vehicle) {
				case "BOLERO PICKUP":
					transportaionCost = 60000;
					break;
				case "TATA 407":
					transportaionCost = 70000;
					break;
				case "EICHER 14FT":
					transportaionCost = 75000;
					break;
				case "EICHER 17FT":
					transportaionCost = 85000;
					break;
				case "EICHER 18FT":
					transportaionCost = 90000;
					break;
				case "EICHER 19FT":
					transportaionCost = 90000;
					break;
				case "TATA 22FT":
					transportaionCost = 95000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 100000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 110000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
			break;
		case "2501-3000":
			switch (vehicle) {
				case "BOLERO PICKUP":
					transportaionCost = 70000;
					break;
				case "TATA 407":
					transportaionCost = 80000;
					break;
				case "EICHER 14FT":
					transportaionCost = 90000;
					break;
				case "EICHER 17FT":
					transportaionCost = 100000;
					break;
				case "EICHER 18FT":
					transportaionCost = 100000;
					break;
				case "EICHER 19FT":
					transportaionCost = 100000;
					break;
				case "TATA 22FT":
					transportaionCost = 110000;
					break;
				case "CONTAINER 32FT SXL":
					transportaionCost = 120000;
					break;
				case "CONTAINER 40FT SXXL":
					transportaionCost = 130000;
					break;
				default:
					return res.send("INVALID VEHICLE!");
			}
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

const GetRelocationQuote = (req, res, serviceId) => {
	const {
		distanceRange,
		distanceType,
		accomodationType,
		vehicle,
		packingType,
		isRequireInsurance,
		goodsValue,
	} = req?.body;

	const serviceDetail = serviceDetails.find((sd) => sd.serviceId == serviceId);
	let isValidRange = false;
	let isValidVehicle = false;
	let isVehicleAllowed = false;
	let isValidPackingType = false;
	let isValidAccomodationType = false;
	//check isValidRange
	isValidRange = serviceDetail?.serviceMetaData?.distance?.values?.some((x) =>
		x?.value?.includes(distanceRange)
	);
	if (!Boolean(isValidRange))
		return res.send({
			error: "invalid input",
			errorMessage: `${distanceRange} is not a valid distance range.`,
		});

	//check isValidVehicle
	let vehicleObj = serviceDetail?.serviceMetaData?.vehicles?.values?.find(
		(x) => x?.name === vehicle
	);
	if (!Boolean(vehicleObj))
		return res.send({error: "invalid input", errorMessage: `${vehicle} is not a valid Vehicle.`});

	//check isVehicleAllowed
	isVehicleAllowed = Boolean(vehicleObj?.maxRange >= Number(distanceRange.split("-")[1]));
	console.log(vehicleObj?.maxRange, Number(distanceRange.split("-")[1]));
	if (!Boolean(isVehicleAllowed))
		return res.send({
			error: "invalid input",
			errorMessage: `${vehicle} is not valid for the given distance Range.`,
		});

	//check isValidPackingType
	isValidPackingType = serviceDetail?.serviceMetaData?.packingType?.values?.includes(packingType);
	if (!Boolean(isValidPackingType))
		return res.send({
			error: "invalid input",
			errorMessage: `${packingType} is not a valid packing type.`,
		});

	//check isValidAccomodationType
	isValidAccomodationType =
		serviceDetail?.serviceMetaData?.accomodationType?.values?.includes(accomodationType);
	if (!Boolean(isValidPackingType))
		return res.send({
			error: "invalid input",
			errorMessage: `${accomodationType} is not a valid accomodation type.`,
		});

	let responseObj = calculateRelocationPrice(
		distanceRange,
		vehicle,
		packingType,
		accomodationType,
		isRequireInsurance,
		goodsValue
	);
	res.send(responseObj);
};

const calculateRelocationPrice = (
	distanceRange,
	vehicle,
	packingType,
	accomodationType,
	isRequireInsurance,
	goodsValue,
	res
) => {
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
	return {currency: "INR", transportaionCost, packingCost, insuranceCost, totalCost};
};

const GetCourierCargoQuote = (req, res, serviceId) => {
	const {
		locationType,
		originPincode,
		destinationPincode,
		docType,
		weight,
		length,
		width,
		height,
		transportType,
	} = req?.body;
	const serviceDetail = serviceDetails.find((sd) => sd.serviceId == serviceId);
	if (!Boolean(serviceDetail))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `Service ID is invalid`,
		});

	//#region INPUT VALIDATION
	let isValidLocationType = false;
	let isValidDocType = false;
	let isValidTransportType = false;

	isValidLocationType = serviceDetail?.serviceMetaData?.locationTypes?.values?.includes(
		locationType.toUpperCase()
	);
	if (!Boolean(isValidLocationType))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `${locationType} is not a valid Location Type`,
		});

	isValidDocType = serviceDetail?.serviceMetaData?.docTypes?.values?.includes(
		docType.toUpperCase()
	);
	if (!Boolean(isValidDocType))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `${docType} is not a valid document Type`,
		});

	isValidTransportType = serviceDetail?.serviceMetaData?.transportTypes?.values?.includes(
		transportType.toUpperCase()
	);
	if (!Boolean(isValidTransportType))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `${transportType} is not a valid transportation Type`,
		});

	//check for numeric props
	if (!Boolean(weight) || isNaN(weight))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `weight must be a number`,
		});

	if (!Boolean(length) || isNaN(length))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `length must be a number`,
		});

	if (!Boolean(width) || isNaN(width))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `width must be a number`,
		});

	if (!Boolean(height) || isNaN(height))
		return res.status(400).send({
			error: "invalid input",
			errorMessage: `height must be a number`,
		});
	//#endregion INPUT VALIDATION

	//#region CALCULATE QUOTE
	let courierCargoCost = 0;
	let volumetricWeight = 0;
	let volume = length * width * height;

	switch (transportType.toUpperCase()) {
		case "GROUND-EXPRESS":
			volumetricWeight = docType.toUpperCase() === "DOCUMENT" ? volume / 4500 : volume / 4500;
			if (weight > 0 && weight <= 10)
				courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 100 : 150;
			else if (weight > 10 && weight <= 50)
				courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 80 : 100;
			else if (weight > 50) courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 65 : 80;
			else
				return res.status(400).send({
					error: "invalid input",
					errorMessage: `weight must be a number and positive`,
				});
			break;
		case "AIR-CARGO":
			volumetricWeight = docType.toUpperCase() === "DOCUMENT" ? volume / 4750 : volume / 4750;
			if (weight > 0 && weight <= 10)
				courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 200 : 280;
			else if (weight > 10 && weight <= 50)
				courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 150 : 220;
			else if (weight > 50) courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 120 : 200;
			else
				return res.status(400).send({
					error: "invalid input",
					errorMessage: `weight must be a number and positive`,
				});
			break;
		case "PRIORITY-EXPRESS":
			volumetricWeight = docType.toUpperCase() === "DOCUMENT" ? volume / 4750 : volume / 4750;
			if (weight > 0 && weight <= 10)
				courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 220 : 300;
			else if (weight > 10 && weight <= 50)
				courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 180 : 250;
			else if (weight > 50) courierCargoCost = docType.toUpperCase() === "DOCUMENT" ? 150 : 220;
			else
				return res.status(400).send({
					error: "invalid input",
					errorMessage: `weight must be a number and positive`,
				});
			break;
		default:
			return res.status(400).send({
				error: "invalid input",
				errorMessage: `${transportType} is not a valid transportation type`,
			});
	}

	return res
		.status(200)
		.send({currency: "INR", courierCargoCost, volumetricWeightUnit: "KiloGram", volumetricWeight});
	//#endregion CALCULATE QUOTE
};
