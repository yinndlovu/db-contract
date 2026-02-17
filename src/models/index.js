const User = require("./user/User");
const Role = require("./user/Role");
const UserRole = require("./user/UserRole");
const Otp = require("./user/Otp");
const JobSeeker = require("./user/JobSeeker");
const Recruiter = require("./user/Recruiter");
const Moderator = require("./user/Moderator");
const Rating = require("./user/Rating");
const Interview = require("./application/Interview");
const WhatsappSession = require("./user/WhatsappSession");
const Company = require("./company/Company");
const Job = require("./job/Job");
const PostedJob = require("./job/PostedJob");
const ScrappedJob = require("./job/ScrappedJob");
const SideGig = require("./job/SideGig");
const Application = require("./application/Application");
const Payment = require("./payment/Payment");
const ITN = require("./payment/ITN");
const SideGigPayment = require("./payment/SideGigPayment");
const Escrow = require("./payment/Escrow");
const Dispute = require("./payment/Dispute");

//User relationships
User.belongsToMany(Role, {
  through: UserRole,
  foreignKey: "userId",
  otherKey: "roleId",
});
Role.belongsToMany(User, {
  through: UserRole,
  foreignKey: "roleId",
  otherKey: "userId",
});

User.hasOne(Recruiter, { foreignKey: "userId" });
Recruiter.belongsTo(User, { foreignKey: "userId" });

User.hasOne(JobSeeker, { foreignKey: "userId" });
JobSeeker.belongsTo(User, { foreignKey: "userId" });

User.hasOne(Moderator, { foreignKey: "userId" });
Moderator.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Otp, { foreignKey: "userId" });
Otp.belongsTo(User, { foreignKey: "userId" });

User.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(User, { foreignKey: "userId" });

//Rating relationships
Rating.belongsTo(User, { as: "reviewer", foreignKey: "reviewerId" });
Rating.belongsTo(User, { as: "ratedUser", foreignKey: "ratedUserId" });

//Job relationships
Job.hasOne(PostedJob, { foreignKey: "jobId" });
PostedJob.belongsTo(Job, { foreignKey: "jobId" });

Job.hasOne(ScrappedJob, { foreignKey: "jobId" });
ScrappedJob.belongsTo(Job, { foreignKey: "jobId" });

Job.hasOne(SideGig, { foreignKey: "jobId" });
SideGig.belongsTo(Job, { foreignKey: "jobId" });

Job.hasMany(Application, { foreignKey: "jobId" });
Application.belongsTo(Job, { foreignKey: "jobId" });

//Company relationships
Company.hasMany(Recruiter, { foreignKey: "companyId" });
Recruiter.belongsTo(Company, { foreignKey: "companyId" });

Company.hasMany(PostedJob, { foreignKey: "companyId" });
PostedJob.belongsTo(Company, { foreignKey: "companyId" });

//Application relationships
Application.hasMany(Interview, { foreignKey: "applicationId" });
Interview.belongsTo(Application, { foreignKey: "applicationId" });

// Recruiter relationships
Recruiter.hasMany(PostedJob, { foreignKey: "recruiterId" });
PostedJob.belongsTo(Recruiter, { foreignKey: "recruiterId" });

Recruiter.hasMany(Interview, { foreignKey: "recruiterId" });
Interview.belongsTo(Recruiter, { foreignKey: "recruiterId" });

//JobSeeker relationships
JobSeeker.hasMany(Application, { foreignKey: "jobSeekerId" });
Application.belongsTo(JobSeeker, { foreignKey: "jobSeekerId" });

JobSeeker.hasMany(SideGig, { foreignKey: "posterId" });
SideGig.belongsTo(JobSeeker, { foreignKey: "posterId" });

JobSeeker.hasMany(WhatsappSession, { foreignKey: "jobSeekerId" });
WhatsappSession.belongsTo(JobSeeker, { foreignKey: "jobSeekerId" });

JobSeeker.hasMany(Escrow, { as: "postedEscrows", foreignKey: "posterId" });
JobSeeker.hasMany(Escrow, {
  as: "applicantEscrows",
  foreignKey: "applicantId",
});

//Payment relationships
Payment.hasOne(ITN, { foreignKey: "paymentId" });
ITN.belongsTo(Payment, { foreignKey: "paymentId" });

Payment.hasOne(SideGigPayment, { foreignKey: "paymentId" });
SideGigPayment.belongsTo(Payment, { foreignKey: "paymentId" });

//SideGigPayment relationships
SideGigPayment.hasOne(Escrow, { foreignKey: "sideGigPaymentId" });
Escrow.belongsTo(SideGigPayment, { foreignKey: "sideGigPaymentId" });

//Escrow relationships
Escrow.hasOne(Dispute, { foreignKey: "escrowId" });
Dispute.belongsTo(Escrow, { foreignKey: "escrowId" });

Escrow.belongsTo(JobSeeker, { as: "poster", foreignKey: "posterId" });
Escrow.belongsTo(JobSeeker, { as: "applicant", foreignKey: "applicantId" });

module.exports = {
  User,
  Role,
  UserRole,
  Otp,
  JobSeeker,
  Recruiter,
  Moderator,
  Rating,
  Interview,
  WhatsappSession,
  Company,
  Job,
  PostedJob,
  ScrappedJob,
  SideGig,
  Application,
  Payment,
  ITN,
  SideGigPayment,
  Escrow,
  Dispute,
};
