import mongoose, { Schema, Types } from "mongoose";
const commercialSchema = new Schema(
  {
   /*  Q: [
      {
        answer: String,
      },
      {
        answer: String,
      },
    ], */
    //owner data

    ownerID: {
      type: String,
      required: true,
    },
    ownerPhone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    bankName: {
      type: String,
      required: true,
    },

    IBAN: {
      type: String,
      required: true,
    },
    ownerBuildingNum: {
      type: String,
      required: true,
    },

    ownerPostalCode: {
      type: String,
      required: true,
    },

    ownerAddCode: {
      type: String,
      required: true,
    },
    ownerDistrict: {
      type: String,
      required: true,
    },
    ownerStreetName: {
      type: String,
      required: true,
    },

    //building Data
    BuildingNum: {
      type: String,
      required: true,
    },

    buildingPostalCode: {
      type: String,
      required: true,
    },

    buildingAddCode: {
      type: String,
      required: true,
    },
    buildingDistrict: {
      type: String,
      required: true,
    },
    buildingStreetName: {
      type: String,
      required: true,
    },
    buildingFloorsNum: {
      type: Number,
    },
    buildingRentalUnitNum: {
      type: Number,
    },
    buildingSakNum: {
      type: String,
    },
    buildingSakDay: {
      type: String,
    },
    buildingSakMonth: {
      type: String,
    },
    buildingSakYear: {
      type: String,
    },
    buildingType: {
      type: String,
    },
    buildingUsage: {
      type: String,
    },
    buildingMwaqefNum: {
      type: Number,
    },
    buildingName: {
      type: String,
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
    commercialName: {
      type: String,
    },
    commercialNumber: {
      type: String,
    },
    commercialExpireDateDay: {
      type: String,
    },
    commercialExpireDateMonth: {
      type: String,
    },
    commercialExpireDateYear: {
      type: String,
    },
    commercialBuildingNum: {
      type: String,
      required: true,
    },

    commercialbuildingPostalCode: {
      type: String,
      required: true,
    },

    commercialbuildingAddCode: {
      type: String,
      required: true,
    },
    commercialbuildingDistrict: {
      type: String,
      required: true,
    },
    commercialbuildingStreetName: {
      type: String,
      required: true,
    },
    commercialClientID: {
      type: String,
    },
    commercialClientDayHJ: {
      type: String,
    },
    commercialClientMonthHJ: {
      type: String,
    },
    commercialClientYearHJ: {
      type: String,
    },
    commercialClientDay: {
      type: String,
    },
    commercialClientMonth: {
      type: String,
    },
    commercialClientYear: {
      type: String,
    },
    commercialClientPhone: {
      type: Number,
    },
    commercialClientEmail: {
      type: String,
    },

    //client Agency
    clientAgencyNum: {
      type: String,
    },
    clientAgencyDateDay: {
      type: String,
    },
    clientAgencyDateMonth: {
      type: String,
    },
    clientAgencyDateYear: {
      type: String,
    },
    
    clientAgencyPhone: {
      type: String,
    },
    clientAgentID: {
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
    // facility
    facilityNum: {
      type: String,
    },
    facilityName: {
      type: String,
    },

    //unit Data
    unitNum: {
      type: Number,
    },
    unitType: {
      type: String,
    },
    unitLocation: {
      type: String,
    },
    unitArea: {
      type: String,
    },
    unitFrontFace: {
      type: String,
    },
    unitFrontFaceDirection: {
      type: String,
    },
    unitFloorNum: {
      type: String,
    },
    unitMezzanine: {
      type: String,
    },
    unitFinishing: {
      type: String,
    },
    unitAdvertisingLength: {
      type: String,
    },
    unitAdvertisingWidth: {
      type: String,
    },
    unitAdvertisingLocation: {
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
    unitKitchenDrawerQ: {
      type: String,
    },
    unitFornitureQ: {
      type: String,
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
    unitPublicServices: {
      type: String,
    },
    unitPublicPrice: {
      type: String,
    },
    unitPrice: {
      type: Number,
    },
    unitInsurance: {
      type: Number,
    },
    unitPaymentType: {
      type: String,
    },
    unitContractPeriod: {
      type: String,
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
    unitNotes: {
      type: String,
    },
    //AuthorityQ
    permissionQ1Answer: {
      type: String,
    },
    permissionQ2Answer: {
      type: String,
    },
    permissionQ3Answer: {
      type: String,
    },
    permissionQ4Answer: {
      type: String,
    },
    permissionQ5Answer: {
      type: String,
    },
    permissionQ6Answer: {
      type: String,
    },
    permissionQ7Answer: {
      type: String,
    },
    // commitment
    commitmentQ1Answer1: {
      type: String,
    },
    commitmentQ1Answer2: {
      type: String,
    },
    commitmentQ2Answer1: {
      type: String,
    },
    commitmentQ2Answer2: {
      type: String,
    },
    commitmentQ3Answer1: {
      type: String,
    },
    commitmentQ3Answer2: {
      type: String,
    },
    commitmentQ4Answer1: {
      type: String,
    },
    commitmentQ4Answer2: {
      type: String,
    },
    //additiomalCommitments
    addcommitmentQ1: {
      type: String,
    },
    addcommitmentQ2: {
      type: String,
    },
    addcommitmentQ3: {
      type: String,
    },
    addcommitmentQ4: {
      type: String,
    },
    addcommitmentQ5: {
      type: String,
    },
    addcommitmentQ6: {
      type: String,
    },
    addcommitmentQ7: {
      type: String,
    },
    addcommitmentQ8: {
      type: String,
    },
    addcommitmentQ9: {
      type: String,
    },
    addcommitmentQ10: {
      type: String,
    },
    addcommitmentQ11: {
      type: String,
    },
    addcommitmentQ12: {
      type: String,
    },
    addcommitmentQ13: {
      type: String,
    },
    addcommitmentQ14: {
      type: String,
    },
    addcommitmentQ15: {
      type: String,
    },
    addcommitmentQ16: {
      type: String,
    },
    addcommitmentQ17: {
      type: String,
    },
    addcommitmentQ18: {
      type: String,
    },
    addcommitmentQ19: {
      type: String,
    },
    addcommitmentQ20: {
      type: String,
    },

    //Documents
    ownerImage: [{ secure_url: String, public_id: String }],
    sakImage: [{ secure_url: String, public_id: String }],
    clientImage: [{ secure_url: String, public_id: String }],
    commercialImage: [{ secure_url: String, public_id: String }],
    agencyImage: [{ secure_url: String, public_id: String }],
    agentImage: [{ secure_url: String, public_id: String }],
  },

  {
    timestamps: true,
  }
);

var commercialModel = mongoose.model("commercial", commercialSchema);

export default commercialModel;
