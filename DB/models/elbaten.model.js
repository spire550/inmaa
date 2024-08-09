import mongoose, { Schema, Types } from "mongoose";

const elbatenSchema = new Schema(
  {
    //contract Data

    contractMainNum: {
      type: Number,
      required: true,
    },
    contractNum: {
      type: Number,
      required: true,
    },
    contractType: {
      type: String,
      required: true,
    },
    contractDateYear: {
      type: String,
      required: true,
    },
    contractDateMonth: {
      type: String,
      required: true,
    },
    contractDateDay: {
      type: String,
      required: true,
    },

    contractPlace: {
      type: String,
      required: true,
    },
    contractStartDateYear: {
      type: String,
      required: true,
    },
    contractStartDateMonth: {
      type: String,
      required: true,
    },
    contractStartDateDay: {
      type: String,
      required: true,
    },
    contractEndDateYear: {
      type: String,
      required: true,
    },
    contractEndDateMonth: {
      type: String,
      required: true,
    },
    contractEndDateDay: {
      type: String,
      required: true,
    },

    //owner Data
    ownerName: {
      type: String,
      required: true,
    },
    ownerNationality: {
      type: String,
      required: true,
    },
    ownerID: {
      type: Number,
      required: true,
    },
    ownerIdType: {
      type: String,
    },
    ownerPhone: {
      type: Number,
    },
    ownerEmail: {
      type: String,
    },

    //client Data
    clientName: {
      type: String,
      required: true,
    },
    clientNationality: {
      type: String,
      required: true,
    },
    clientID: {
      type: Number,
      required: true,
    },
    clientIdType: {
      type: String,
    },
    clientPhone: {
      type: Number,
    },
    clientEmail: {
      type: String,
    },

    //agecy&facility Data
    facilityName: {
      type: String,
    },
    facilityAddress: {
      type: String,
    },
    facilityRecordNum: {
      type: Number,
    },
    facilityPhone: {
      type: Number,
    },
    agentName: {
      type: String,
    },
    agentNationality: {
      type: String,
    },
    agentID: {
      type: Number,
    },
    agentIdType: {
      type: String,
    },
    agentPhone: {
      type: Number,
    },
    agentEmail: {
      type: String,
    },

    ///Sak Data
    sakNumber: {
      type: Number,
    },
    sakIssuer: {
      type: String,
    },
    sakDateYear: {
      type: String,
    },
    sakDateMonth: {
      type: String,
    },
    sakDateDay: {
      type: String,
    },
    sakAddress: {
      type: String,
    },

    //Building Data
    buildingAdress: {
      type: String,
    },
    buildingType: {
      type: String,
    },
    buildingUsage: {
      type: String,
    },
    buildingFloorNum: {
      type: Number,
    },
    buildingUnitsNum: {
      type: Number,
    },
    buildingElevatorNum: {
      type: Number,
    },
    buildingMawaqefNum: {
      type: Number,
    },

    //unit Data
    unitType: {
      type: String,
    },
    unitNum: {
      type: String,
    },
    unitOwner: {
      type: String,
    },
    unitFloorNum: {
      type: Number,
    },
    unitFurnishingcon: {
      type: String,
    },
    unitKitchenCabinets: {
      type: String,
    },
    unitRoomType: {
      type: String,
    },
    unitRoomNum: {
      type: Number,
    },
    unitACType: {
      type: String,
    },
    unitACNum: {
      type: Number,
    },
    unitElecNum: {
      type: Number,
    },
    unitElecRead: {
      type: Number,
    },
    unitWaterNum: {
      type: Number,
    },
    unitWaterRead: {
      type: Number,
    },
    unitGasNum: {
      type: Number,
    },
    unitGasRead: {
      type: Number,
    },

    //financial Data
    effortPrice: {
      type: String,
    },
    guaranteePrice: {
      type: String,
    },
    elecMonthlyPrice: {
      type: String,
    },
    gasMonthlyPrice: {
      type: String,
    },
    waterMonthlyPrice: {
      type: String,
    },
    mowafqMonthlyPrice: {
      type: String,
    },
    MonthlyPrice: {
      type: String,
    },
    mawaqefRentNum: {
      type: Number,
    },
    periodicRentPayment: {
      type: String,
    },
    rentPaymentCycle: {
      type: String,
    },
    lastRentPayment: {
      type: String,
    },
    rentCycleNum: {
      type: Number,
    },
    totalContract: {
      type: String,
    },

    serialNumber: {
      type: Number,
    },
    serialDateYear: {
      type: String,
    },
    serialDateMonth: {
      type: String,
    },
    serialDateDay: {
      type: String,
    },
    serialDateEndYear: {
      type: String,
    },
    serialDateEndMonth: {
      type: String,
    },
    serialDateEndDay: {
      type: String,
    },
    serialDateHJYear: {
      type: String,
    },
    serialDateHJMonth: {
      type: String,
    },
    serialDateHJDay: {
      type: String,
    },
    serialDateEndHJYear: {
      type: String,
    },
    serialDateEndHJMonth: {
      type: String,
    },
    serialDateEndHJDay: {
      type: String,
    },
    serialValue: {
      type: String,
    },

    ownerImage: [{ secure_url: String, public_id: String }],
    clientImage: [{ secure_url: String, public_id: String }],
    agentImage: [{ secure_url: String, public_id: String }],
  },
  {
    timestamps: true,
  }
);

var elbatenModel = mongoose.model("elbaten", elbatenSchema);

export default elbatenModel;
