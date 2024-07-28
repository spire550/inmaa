import mongoose, { Schema, Types } from "mongoose";
const realSchema = new Schema(
  {
   
    //owner data
    ownerName: {
      type: String,
      required: true,
    },
    ownerID: {
      type: String,
      required: true,
    },
    ownerPhone: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    ownerBuildingNum: {
      type: String,
      required: true,
    },

    postalCode: {
      type: String,
      required: true,
    },
    sakNumber: {
      type: Number,
      required: true,
    },
    sakDay: {
      type: String,
      required: true,
    },
    sakMonth: {
      type: String,
      required: true,
    },
    sakYear: {
      type: String,
      required: true,
    },
    floorNum: {
      type: Number,
    },
    mawaqfNum: { type: Number },
    buildingName: {
      type: String,
    },
    dayBD: {
      type: String,
    },
    monthBD: {
      type: String,
    },
    yearBD: {
      type: String,
    },
    email: {
      type: String,
    },
    IBAN: {
      type: String,
      required: true,
    },
    addCode: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    streetName: {
      type: String,
      required: true,
    },
    aprtmentsNum: {
      type: Number,
    },
    elevatorNum: {
      type: Number,
    },
    buildingDay: {
      type: String,
    },
    buildingMonth: {
      type: String,
    },
    buildingYear: {
      type: String,
    },
    //owner-agency
    ownerAgencyNum: {
      type: String,
    },
    ownerAgencyDate: {
      type: String,
    },
    ownerAgentName: {
      type: String,
    },
    ownerAgencyPhone: {
      type: String,
    },
    ownerAgencyDay: {
      type: String,
    },
    ownerAgencyMonth: {
      type: String,
    },
    ownerAgencyYear: {
      type: String,
    },
    ownerAgencyEmail: {
      type: String,
    },
    //client data
    clientName: {
      type: String,
      required: true,
    },
    clientIDNumber: {
      type: String,
      required: true,
    },
    clientPhone: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
    },
    clientDayBD: {
      type: String,
    },
    clientMonthBD: {
      type: String,
    },
    clientYearBD: {
      type: String,
    },
    clientDayBDHJ: {
      type: String,
    },
    clientMonthBDHJ: {
      type: String,
    },
    clientYearBDHJ: {
      type: String,
    },
    //client Agency
    clientAgencyNum: {
      type: String,
    },
    clientAgencyDate: {
      type: String,
    },
    clientAgentName: {
      type: String,
    },
    clientAgencyPhone: {
      type: String,
    },
    clientAgencyDay: {
      type: String,
    },
    clientAgencyMonth: {
      type: String,
    },
    clientAgencyYear: {
      type: String,
    },
    clientAgencyEmail: {
      type: String,
    },

    //unit Data
    unitNum: {
      type: Number,
    },
    unitFloor: {
      type: Number,
    },
    unitBedRooms: {
      type: Number,
    },
    unitSeats: {
      type: Number,
    },
    unitHalls: {
      type: Number,
    },
    unitMaidRooms: {
      type: Number,
    },
    unitStoreNum: {
      type: Number,
    },
    unitKitchenNum: {
      type: Number,
    },
    unitBathroomNum: {
      type: Number,
    },
    unitYardNum: {
      type: Number,
    },
    unitTypeQ: {
      type: String,
    },
    unitTypeOther: {
      type: String,
    },
    unitFornitureQ: {
      type: String,
    },
    unitKitchenDrawerQ: {
      type: String,
    },
    unitACQ: {
      type: String,
    },
    unitACNormalNum: {
      type: Number,
    },
    unitACCnetralNum: {
      type: Number,
    },
    unitSplitNum: {
      type: Number,
    },
    unitWindowNum: {
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
    unitPrice: {
      type: Number,
    },
    unitInsurance: {
      type: Number,
    },
    unitDay: {
      type: String,
    },
    unitMonth: {
      type: String,
    },
    unitYear: {
      type: String,
    },
    unitPayment: {
      type: String,
    },
    unitContract: {
      type: String,
    },
    unitAutoRenewal: {
      type: String,
    },
    unitNotes: {
      type: String,
    },

    //Documents
    ownerImage: [{ secure_url: String, public_id: String }],
    clientImage: [{ secure_url: String, public_id: String }],
    sakImage: [{ secure_url: String, public_id: String }],
    familyImages: [{ secure_url: String, public_id: String }],
    agencyImage: [{ secure_url: String, public_id: String }],
    agentImage: [{ secure_url: String, public_id: String }],
  },

  {
    timestamps: true,
  }
);

var estateModel = mongoose.model("realestate", realSchema);

export default estateModel;
