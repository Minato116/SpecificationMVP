import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  project: {
    type: String,
  },
  achievements: {
    type: String,
  },
  steps: {
    type: String,
  },
  risks: {
    type: String,
  },
  status: {
    type: String,
  },
  projectDetails: {
    projectDescription: {
      type: String,
      default:""
    },
    engagementType: {
      type: String,
      default:""
    },
    deliveryModel: {
      type: String,
      default:""
    },
    projectDuration: {
      type: String,
      default:""
    },
    sprintStartDate: {
      type: Date,
      default:""
    },
    sprintEndDate: {
      type: Date,
      default:""
    },
    teamSize: {
      type: Number,
      default:0
    },
  },
  projectDetail2: {
    customerSponsor: { type: String, default:"" },
    PM: { type: String, default:"" },
    technology: { type: String, default:"" },
    scrumTeam: { type: String , default:""},
    sow: { 
      cbs: {type:String, default:""},
      startDate: {type:Date, default:""},
      endDate: {type:Date, default:""},
      signed: {type:String, default:""},
      reminder: {type:String, default:""},
     },
  },
  accomplishments: {
    currentStatus: { type: String, default:"" },
    plan: { type: String , default:""},
  },
  type : {
    type: {type:String, default:""},
    description: {type:String, default:""},
    impact: {type:String, default:""},
    mitigation: {type:String, default:""},
    owner: {type:String, default:""},
    dueDate: {type:Date, default:""},
  },
  metrics: {
    ratio: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
    velocity: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
    codeSmell: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
    ut: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
    defect: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
    test: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
    schedule: {
      av: {type:String, default:""},
      status: {type:String, default:""},
      comments: {type:String, default:""},
    },
  },
  milestones: {
    key: {type:String, default:""},
    date: {type:Date, default:""},
    status: {type:String, default:""},
  },
},{
    timestamps: true
});

const Project = mongoose.model("Project", projectSchema);

export default Project;