import commercialModel from "../../../DB/models/commercial.model.js";
import cloudinaryConnection from "../utils/cloudinary.js";

export const add = async (req, res, next) => {
  const {
    ownerID,
    ownerPhone,
    email,
    bankName,
    IBAN,
    ownerBuildingNum,
    ownerPostalCode,
    ownerAddCode,
    ownerDistrict,
    ownerStreetName,
    BuildingNum,
    buildingPostalCode,
    buildingAddCode,
    buildingDistrict,
    buildingStreetName,
    buildingFloorsNum,
    buildingRentalUnitNum,
    buildingSakNum,
    buildingSakDay,
    buildingSakMonth,
    buildingSakYear,
    buildingType,
    buildingUsage,
    buildingMwaqefNum,
    buildingName,
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
    commercialName,
    commercialNumber,
    commercialExpireDateDay,
    commercialExpireDateMonth,
    commercialExpireDateYear,
    commercialBuildingNum,
    commercialbuildingPostalCode,
    commercialbuildingAddCode,
    commercialbuildingDistrict,
    commercialbuildingStreetName,
    commercialClientID,
    commercialClientDayHJ,
    commercialClientMonthHJ,
    commercialClientYearHJ,
    commercialClientDay,
    commercialClientMonth,
    commercialClientYear,
    commercialClientPhone,
    commercialClientEmail,
    clientAgencyNum,
    clientAgencyDateDay,
    clientAgencyDateMonth,
    clientAgencyDateYear,
    clientAgencyPhone,
    clientAgentID,
    clientAgencyDay,
    clientAgencyMonth,
    clientAgencyYear,
    clientAgencyEmail,
    facilityNum,
    facilityName,
    unitNum,
    unitType,
    unitLocation,
    unitArea,
    unitFrontFace,
    unitFrontFaceDirection,
    unitFloorNum,
    unitMezzanine,
    unitFinishing,
    unitAdvertisingLength,
    unitAdvertisingWidth,
    unitAdvertisingLocation,
    unitACQ,
    unitACNormalNum,
    unitACCnetralNum,
    unitSplitNum,
    unitWindowNum,
    unitKitchenDrawerQ,
    unitFornitureQ,
    unitElecNum,
    unitElecRead,
    unitWaterNum,
    unitWaterRead,
    unitPublicServices,
    unitPublicPrice,
    unitPrice,
    unitInsurance,
    unitPaymentType,
    unitContractPeriod,
    unitDay,
    unitMonth,
    unitYear,
    unitNotes,
    permissionQ1Answer,
    permissionQ2Answer,
    permissionQ3Answer,
    permissionQ4Answer,
    permissionQ5Answer,
    permissionQ6Answer,
    permissionQ7Answer,
    commitmentQ1Answer1,
    commitmentQ1Answer2,
    commitmentQ2Answer1,
    commitmentQ2Answer2,
    commitmentQ3Answer1,
    commitmentQ3Answer2,
    commitmentQ4Answer1,
    commitmentQ4Answer2,
    addcommitmentQ1,
    addcommitmentQ2,
    addcommitmentQ3,
    addcommitmentQ4,
    addcommitmentQ5,
    addcommitmentQ6,
    addcommitmentQ7,
    addcommitmentQ8,
    addcommitmentQ9,
    addcommitmentQ10,
    addcommitmentQ11,
    addcommitmentQ12,
    addcommitmentQ13,
    addcommitmentQ14,
    addcommitmentQ15,
    addcommitmentQ16,
    addcommitmentQ17,
    addcommitmentQ18,
    addcommitmentQ19,
    addcommitmentQ20,
  } = req.body;

  const ownerImage = [];
  const clientImage = [];
  const sakImage = [];
  const commercialImage = [];
  const agencyImage = [];
  const agentImage = [];
  if (
    !req.files.owner ||
    !req.files.client ||
    !req.files.sak ||
    !req.files.commercialImage ||
    !req.files.agency ||
    !req.files.agent
  ) {
    return next({ cause: 400, message: "All Images are required" });
  }
  for (const file of req.files["owner"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/commEstate`,
      });
    ownerImage.push({ secure_url, public_id });
  }
  for (const file of req.files["client"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/commEstate`,
      });
    clientImage.push({ secure_url, public_id });
  }
  for (const file of req.files["sak"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/commEstate`,
      });
    sakImage.push({ secure_url, public_id });
  }
  for (const file of req.files["commercialImage"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/commEstate`,
      });
    commercialImage.push({ secure_url, public_id });
  }
  for (const file of req.files["agency"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/commEstate`,
      });
    agencyImage.push({ secure_url, public_id });
  }
  for (const file of req.files["agent"]) {
    const { secure_url, public_id } =
      await cloudinaryConnection().uploader.upload(file.path, {
        folder: `images/commEstate`,
      });
    agentImage.push({ secure_url, public_id });
  }

  const data = await commercialModel.create({
    ownerID,
    ownerPhone,
    email,
    bankName,
    IBAN,
    ownerBuildingNum,
    ownerPostalCode,
    ownerAddCode,
    ownerDistrict,
    ownerStreetName,
    BuildingNum,
    buildingPostalCode,
    buildingAddCode,
    buildingDistrict,
    buildingStreetName,
    buildingFloorsNum,
    buildingRentalUnitNum,
    buildingSakNum,
    buildingSakDay,
    buildingSakMonth,
    buildingSakYear,
    buildingType,
    buildingUsage,
    buildingMwaqefNum,
    buildingName,
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
    commercialName,
    commercialNumber,
    commercialExpireDateDay,
    commercialExpireDateMonth,
    commercialExpireDateYear,
    commercialBuildingNum,
    commercialbuildingPostalCode,
    commercialbuildingAddCode,
    commercialbuildingDistrict,
    commercialbuildingStreetName,
    commercialClientID,
    commercialClientDayHJ,
    commercialClientMonthHJ,
    commercialClientYearHJ,
    commercialClientDay,
    commercialClientMonth,
    commercialClientYear,
    commercialClientPhone,
    commercialClientEmail,
    clientAgencyNum,
    clientAgencyDateDay,
    clientAgencyDateMonth,
    clientAgencyDateYear,
    clientAgencyPhone,
    clientAgentID,
    clientAgencyDay,
    clientAgencyMonth,
    clientAgencyYear,
    clientAgencyEmail,
    facilityNum,
    facilityName,
    unitNum,
    unitType,
    unitLocation,
    unitArea,
    unitFrontFace,
    unitFrontFaceDirection,
    unitFloorNum,
    unitMezzanine,
    unitFinishing,
    unitAdvertisingLength,
    unitAdvertisingWidth,
    unitAdvertisingLocation,
    unitACQ,
    unitACNormalNum,
    unitACCnetralNum,
    unitSplitNum,
    unitWindowNum,
    unitKitchenDrawerQ,
    unitFornitureQ,
    unitElecNum,
    unitElecRead,
    unitWaterNum,
    unitWaterRead,
    unitPublicServices,
    unitPublicPrice,
    unitPrice,
    unitInsurance,
    unitPaymentType,
    unitContractPeriod,
    unitDay,
    unitMonth,
    unitYear,
    unitNotes,
    permissionQ1Answer,
    permissionQ2Answer,
    permissionQ3Answer,
    permissionQ4Answer,
    permissionQ5Answer,
    permissionQ6Answer,
    permissionQ7Answer,
    commitmentQ1Answer1,
    commitmentQ1Answer2,
    commitmentQ2Answer1,
    commitmentQ2Answer2,
    commitmentQ3Answer1,
    commitmentQ3Answer2,
    commitmentQ4Answer1,
    commitmentQ4Answer2,
    addcommitmentQ1,
    addcommitmentQ2,
    addcommitmentQ3,
    addcommitmentQ4,
    addcommitmentQ5,
    addcommitmentQ6,
    addcommitmentQ7,
    addcommitmentQ8,
    addcommitmentQ9,
    addcommitmentQ10,
    addcommitmentQ11,
    addcommitmentQ12,
    addcommitmentQ13,
    addcommitmentQ14,
    addcommitmentQ15,
    addcommitmentQ16,
    addcommitmentQ17,
    addcommitmentQ18,
    addcommitmentQ19,
    addcommitmentQ20,
    ownerImage,
    clientImage,
    sakImage,
    commercialImage,
    agencyImage,
    agentImage,
  });
  return res.json({ success: true, message: "Data Added Successfully" });
};

export const getAllData = async (req, res, next) => {
  let { page } = req.query;

  page = page < 1 || isNaN(page) || !page ? 1 : page;
  const limit = 1;
  const skip = limit * (page - 1);
  const data = await commercialModel.find().skip(skip).limit(limit);
  if (!data.length) {
    return next(new Error("No Data exists"));
  }
  res.json({ success: true, data });
};
