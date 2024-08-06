import elbatenModel from "../../../DB/models/elbaten.model.js";
import cloudinaryConnection from "../utils/cloudinary.js";

export const add = async (req, res, next) => {
  const {
    contractMainNum,
    contractNum,
    contractType,
    contractDateYear,
    contractDateMonth,
    contractDateDay,
    contractPlace,
    contractStartDateYear,
    contractStartDateMonth,
    contractStartDateDay,
    contractEndDateYear,
    contractEndDateMonth,
    contractEndDateDay,
    ownerName,
    ownerNationality,
    ownerID,
    ownerIdType,
    ownerPhone,
    ownerEmail,
    clientName,
    clientNationality,
    clientID,
    clientIdType,
    clientPhone,
    clientEmail,
    facilityName,
    facilityAddress,
    facilityRecordNum,
    facilityPhone,
    agentName,
    agentNationality,
    agentID,
    agentIdType,
    agentPhone,
    agentEmail,
    sakNumber,
    sakIssuer,
    sakDateYear,
    sakDateMonth,
    sakDateDay,
    sakAddress,
    buildingAdress,
    buildingType,
    buildingUsage,
    buildingFloorNum,
    buildingUnitsNum,
    buildingElevatorNum,
    buildingMawaqefNum,
    unitType,
    unitNum,
    unitOwner,
    unitFloorNum,
    unitFurnishingcon,
    unitKitchenCabinets,
    unitRoomType,
    unitRoomNum,
    unitACType,
    unitACNum,
    unitElecNum,
    unitElecRead,
    unitWaterNum,
    unitWaterRead,
    unitGasNum,
    unitGasRead,
    effortPrice,
    guaranteePrice,
    elecMonthlyPrice,
    gasMonthlyPrice,
    waterMonthlyPrice,
    mowafqMonthlyPrice,
    MonthlyPrice,
    mawaqefRentNum,
    periodicRentPayment,
    rentPaymentCycle,
    lastRentPayment,
    rentCycleNum,
    totalContract,
    serialNumber,
    serialDateYear,
    serialDateMonth,
    serialDateDay,
    serialDateEndYear,
    serialDateEndMonth,
    serialDateEndDay,
    serialDateHJYear,
    serialDateHJMonth,
    serialDateHJDay,
    serialDateEndHJYear,
    serialDateEndHJMonth,
    serialDateEndHJDay,
    serialValue,
  } = req.body;

  const ownerImage = [];
  const clientImage = [];
  const agentImage = [];
  if (!req.files.owner || !req.files.client || !req.files.agent) {
    return next({ cause: 400, message: "All Images are required" });
  }
  for (const file of req.files["owner"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/elbatenEstate`,
      });
    ownerImage.push({ secure_url, public_id });
  }
  for (const file of req.files["client"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/elbatenEstate`,
      });
    clientImage.push({ secure_url, public_id });
  }

  for (const file of req.files["agent"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/elbatenEstate`,
      });
    agentImage.push({ secure_url, public_id });
  }

  const data = await elbatenModel.create({
    contractMainNum,
    contractNum,
    contractType,
    contractDateYear,
    contractDateMonth,
    contractDateDay,
    contractPlace,
    contractStartDateYear,
    contractStartDateMonth,
    contractStartDateDay,
    contractEndDateYear,
    contractEndDateMonth,
    contractEndDateDay,
    ownerName,
    ownerNationality,
    ownerID,
    ownerIdType,
    ownerPhone,
    ownerEmail,
    clientName,
    clientNationality,
    clientID,
    clientIdType,
    clientPhone,
    clientEmail,
    facilityName,
    facilityAddress,
    facilityRecordNum,
    facilityPhone,
    agentName,
    agentNationality,
    agentID,
    agentIdType,
    agentPhone,
    agentEmail,
    sakNumber,
    sakIssuer,
    sakDateYear,
    sakDateMonth,
    sakDateDay,
    sakAddress,
    buildingAdress,
    buildingType,
    buildingUsage,
    buildingFloorNum,
    buildingUnitsNum,
    buildingElevatorNum,
    buildingMawaqefNum,
    unitType,
    unitNum,
    unitOwner,
    unitFloorNum,
    unitFurnishingcon,
    unitKitchenCabinets,
    unitRoomType,
    unitRoomNum,
    unitACType,
    unitACNum,
    unitElecNum,
    unitElecRead,
    unitWaterNum,
    unitWaterRead,
    unitGasNum,
    unitGasRead,
    effortPrice,
    guaranteePrice,
    elecMonthlyPrice,
    gasMonthlyPrice,
    waterMonthlyPrice,
    mowafqMonthlyPrice,
    MonthlyPrice,
    mawaqefRentNum,
    periodicRentPayment,
    rentPaymentCycle,
    lastRentPayment,
    rentCycleNum,
    totalContract,
    serialNumber,
    serialDateYear,
    serialDateMonth,
    serialDateDay,
    serialDateEndYear,
    serialDateEndMonth,
    serialDateEndDay,
    serialDateHJYear,
    serialDateHJMonth,
    serialDateHJDay,
    serialDateEndHJYear,
    serialDateEndHJMonth,
    serialDateEndHJDay,
    serialValue,
    ownerImage,
    clientImage,
    agentImage,
  });
  return res.json({ success: true, message: "Data Added Successfully" });
};

export const getAllData = async (req, res, next) => {
  let { page } = req.query;

  page = page < 1 || isNaN(page) || !page ? 1 : page;
  const limit = 1;
  const skip = limit * (page - 1);
  const data = await elbatenModel.find().skip(skip).limit(limit);
  if (!data.length) {
    return next(new Error("No Data exists"));
  }
  res.json({ success: true, data });
};
