import estateModel from "../../../DB/models/realEstate.model.js";
import cloudinaryConnection from "../utils/cloudinary.js";
export const add = async (req, res, next) => {
  const {
    ownerName,
    ownerID,
    ownerPhone,
    bankName,
    IBAN,
    email,
    ownerBuildingNum,
    postalCode,
    sakNumber,
    sakDay,
    sakMonth,
    sakYear,
    floorNum,
    mawaqfNum,
    buildingName,
    dayBD,
    monthBD,
    yearBD,
    addCode,
    district,
    streetName,
    aprtmentsNum,
    elevatorNum,
    buildingDay,
    buildingMonth,
    buildingYear,
    ownerAgencyNum,
    ownerAgencyDate,
    ownerAgentName,
    ownerAgencyPhone,
    ownerAgencyDay,
    ownerAgencyMonth,
    ownerAgencyYear,
    ownerAgencyEmail,
    ///////////////////////////
    clientName,
    clientIDNumber,
    clientPhone,
    clientEmail,
    clientDayBD,
    clientMonthBD,
    clientYearBD,
    clientDayBDHJ,
    clientMonthBDHJ,
    clientYearBDHJ,
    clientAgencyNum,
    clientAgencyDate,
    clientAgentName,
    clientAgencyPhone,
    clientAgencyDay,
    clientAgencyMonth,
    clientAgencyYear,
    clientAgencyEmail,
    ///////////////////////////////////
    unitNum,
    unitFloor,
    unitBedRooms,
    unitSeats,
    unitHalls,
    unitMaidRooms,
    unitStoreNum,
    unitKitchenNum,
    unitBathroomNum,
    unitYardNum,
    unitTypeQ,
    unitTypeOther,
    unitFornitureQ,
    unitKitchenDrawerQ,
    unitACQ,
    unitACNormalNum,
    unitACCnetralNum,
    unitSplitNum,
    unitWindowNum,
    unitElecNum,
    unitElecRead,
    unitWaterNum,
    unitWaterRead,
    unitGasNum,
    unitGasRead,
    unitPrice,
    unitInsurance,
    unitDay,
    unitMonth,
    unitYear,
    unitPayment,
    unitContract,
    unitAutoRenewal,
    unitNotes,
  } = req.body;
 /*  const ownerImage = [];
  const clientImage = [];
  const sakImage = [];
  const familyImages = [];
  const agencyImage = [];
  const agentImage = [];

  if (
    !req.files.owner ||
    !req.files.client ||
    !req.files.sak ||
    !req.files.family ||
    !req.files.agency ||
    !req.files.agent
  ) {
    return next({ cause: 400, message: "All Images are required" });
  }
  for (const file of req.files["owner"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/realEstate`,
      });
    ownerImage.push({ secure_url, public_id });
  }
  for (const file of req.files["client"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/realEstate`,
      });
    clientImage.push({ secure_url, public_id });
  }
  for (const file of req.files["sak"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/realEstate`,
      });
    sakImage.push({ secure_url, public_id });
  }
  for (const file of req.files["family"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/realEstate`,
      });
    familyImages.push({ secure_url, public_id });
  }
  for (const file of req.files["agency"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/realEstate`,
      });
    agencyImage.push({ secure_url, public_id });
  }
  for (const file of req.files["agent"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/realEstate`,
      });
    agentImage.push({ secure_url, public_id });
  } */

  const test = await estateModel.create({
    ownerName,
    ownerID,
    ownerPhone,
    bankName,
    IBAN,
    email,
    ownerBuildingNum,
    postalCode,
    sakNumber,
    sakDay,
    sakMonth,
    sakYear,
    floorNum,
    mawaqfNum,
    buildingName,
    dayBD,
    monthBD,
    yearBD,
    addCode,
    district,
    streetName,
    aprtmentsNum,
    elevatorNum,
    buildingDay,
    buildingMonth,
    buildingYear,
    ownerAgencyNum,
    ownerAgencyDate,
    ownerAgentName,
    ownerAgencyPhone,
    ownerAgencyDay,
    ownerAgencyMonth,
    ownerAgencyYear,
    ownerAgencyEmail,
    clientName,
    clientIDNumber,
    clientPhone,
    clientEmail,
    clientDayBD,
    clientMonthBD,
    clientYearBD,
    clientDayBDHJ,
    clientMonthBDHJ,
    clientYearBDHJ,
    clientAgencyNum,
    clientAgencyDate,
    clientAgentName,
    clientAgencyPhone,
    clientAgencyDay,
    clientAgencyMonth,
    clientAgencyYear,
    clientAgencyEmail,
    unitNum,
    unitFloor,
    unitBedRooms,
    unitSeats,
    unitHalls,
    unitMaidRooms,
    unitStoreNum,
    unitKitchenNum,
    unitBathroomNum,
    unitYardNum,
    unitTypeQ,
    unitTypeOther,
    unitFornitureQ,
    unitKitchenDrawerQ,
    unitACQ,
    unitACNormalNum,
    unitACCnetralNum,
    unitSplitNum,
    unitWindowNum,
    unitElecNum,
    unitElecRead,
    unitWaterNum,
    unitWaterRead,
    unitGasNum,
    unitGasRead,
    unitPrice,
    unitInsurance,
    unitDay,
    unitMonth,
    unitYear,
    unitPayment,
    unitContract,
    unitAutoRenewal,
    unitNotes,
   /*  ownerImage,
    clientImage,
    sakImage,
    familyImages,
    agencyImage,
    agentImage, */
  });
  return res.json({ success: true, message: "Data Added Successfully" });
};

export const getAllData = async (req, res, next) => {
  let { page } = req.query;

  page = page < 1 || isNaN(page) || !page ? 1 : page;
  const limit = 1;
  const skip = limit * (page - 1);
  const data = await estateModel.find().skip(skip).limit(limit);
  if (!data.length) {
    return next(new Error("No Data exists"));
  }
  res.json({ success: true, data });
};
