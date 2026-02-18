"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispute = exports.Escrow = exports.SideGigPayment = exports.ITN = exports.Payment = exports.Application = exports.SideGig = exports.ScrappedJob = exports.PostedJob = exports.Job = exports.Company = exports.WhatsappSession = exports.Interview = exports.Rating = exports.Moderator = exports.Recruiter = exports.JobSeeker = exports.Otp = exports.UserRole = exports.Role = exports.User = void 0;
const User_1 = require("./user/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
const Role_1 = require("./user/Role");
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Role_1.Role; } });
const UserRole_1 = require("./user/UserRole");
Object.defineProperty(exports, "UserRole", { enumerable: true, get: function () { return UserRole_1.UserRole; } });
const Otp_1 = require("./user/Otp");
Object.defineProperty(exports, "Otp", { enumerable: true, get: function () { return Otp_1.Otp; } });
const JobSeeker_1 = require("./user/JobSeeker");
Object.defineProperty(exports, "JobSeeker", { enumerable: true, get: function () { return JobSeeker_1.JobSeeker; } });
const Recruiter_1 = require("./user/Recruiter");
Object.defineProperty(exports, "Recruiter", { enumerable: true, get: function () { return Recruiter_1.Recruiter; } });
const Moderator_1 = require("./user/Moderator");
Object.defineProperty(exports, "Moderator", { enumerable: true, get: function () { return Moderator_1.Moderator; } });
const Rating_1 = require("./user/Rating");
Object.defineProperty(exports, "Rating", { enumerable: true, get: function () { return Rating_1.Rating; } });
const Interview_1 = require("./application/Interview");
Object.defineProperty(exports, "Interview", { enumerable: true, get: function () { return Interview_1.Interview; } });
const WhatsappSession_1 = require("./user/WhatsappSession");
Object.defineProperty(exports, "WhatsappSession", { enumerable: true, get: function () { return WhatsappSession_1.WhatsappSession; } });
const Company_1 = require("./company/Company");
Object.defineProperty(exports, "Company", { enumerable: true, get: function () { return Company_1.Company; } });
const Job_1 = require("./job/Job");
Object.defineProperty(exports, "Job", { enumerable: true, get: function () { return Job_1.Job; } });
const PostedJob_1 = require("./job/PostedJob");
Object.defineProperty(exports, "PostedJob", { enumerable: true, get: function () { return PostedJob_1.PostedJob; } });
const ScrappedJob_1 = require("./job/ScrappedJob");
Object.defineProperty(exports, "ScrappedJob", { enumerable: true, get: function () { return ScrappedJob_1.ScrappedJob; } });
const SideGig_1 = require("./job/SideGig");
Object.defineProperty(exports, "SideGig", { enumerable: true, get: function () { return SideGig_1.SideGig; } });
const Application_1 = require("./application/Application");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return Application_1.Application; } });
const Payment_1 = require("./payment/Payment");
Object.defineProperty(exports, "Payment", { enumerable: true, get: function () { return Payment_1.Payment; } });
const ITN_1 = require("./payment/ITN");
Object.defineProperty(exports, "ITN", { enumerable: true, get: function () { return ITN_1.ITN; } });
const SideGigPayment_1 = require("./payment/SideGigPayment");
Object.defineProperty(exports, "SideGigPayment", { enumerable: true, get: function () { return SideGigPayment_1.SideGigPayment; } });
const Escrow_1 = require("./payment/Escrow");
Object.defineProperty(exports, "Escrow", { enumerable: true, get: function () { return Escrow_1.Escrow; } });
const Dispute_1 = require("./payment/Dispute");
Object.defineProperty(exports, "Dispute", { enumerable: true, get: function () { return Dispute_1.Dispute; } });
//User relationships
User_1.User.belongsToMany(Role_1.Role, {
    through: UserRole_1.UserRole,
    foreignKey: "userId",
    otherKey: "roleId",
});
Role_1.Role.belongsToMany(User_1.User, {
    through: UserRole_1.UserRole,
    foreignKey: "roleId",
    otherKey: "userId",
});
User_1.User.hasOne(Recruiter_1.Recruiter, { foreignKey: "userId" });
Recruiter_1.Recruiter.belongsTo(User_1.User, { foreignKey: "userId" });
User_1.User.hasOne(JobSeeker_1.JobSeeker, { foreignKey: "userId" });
JobSeeker_1.JobSeeker.belongsTo(User_1.User, { foreignKey: "userId" });
User_1.User.hasOne(Moderator_1.Moderator, { foreignKey: "userId" });
Moderator_1.Moderator.belongsTo(User_1.User, { foreignKey: "userId" });
User_1.User.hasMany(Otp_1.Otp, { foreignKey: "userId" });
Otp_1.Otp.belongsTo(User_1.User, { foreignKey: "userId" });
User_1.User.hasMany(Payment_1.Payment, { foreignKey: "userId" });
Payment_1.Payment.belongsTo(User_1.User, { foreignKey: "userId" });
//Rating relationships
Rating_1.Rating.belongsTo(User_1.User, { as: "reviewer", foreignKey: "reviewerId" });
Rating_1.Rating.belongsTo(User_1.User, { as: "ratedUser", foreignKey: "ratedUserId" });
//Job relationships
Job_1.Job.hasOne(PostedJob_1.PostedJob, { foreignKey: "jobId" });
PostedJob_1.PostedJob.belongsTo(Job_1.Job, { foreignKey: "jobId" });
Job_1.Job.hasOne(ScrappedJob_1.ScrappedJob, { foreignKey: "jobId" });
ScrappedJob_1.ScrappedJob.belongsTo(Job_1.Job, { foreignKey: "jobId" });
Job_1.Job.hasOne(SideGig_1.SideGig, { foreignKey: "jobId" });
SideGig_1.SideGig.belongsTo(Job_1.Job, { foreignKey: "jobId" });
Job_1.Job.hasMany(Application_1.Application, { foreignKey: "jobId" });
Application_1.Application.belongsTo(Job_1.Job, { foreignKey: "jobId" });
//Company relationships
Company_1.Company.hasMany(Recruiter_1.Recruiter, { foreignKey: "companyId" });
Recruiter_1.Recruiter.belongsTo(Company_1.Company, { foreignKey: "companyId" });
Company_1.Company.hasMany(PostedJob_1.PostedJob, { foreignKey: "companyId" });
PostedJob_1.PostedJob.belongsTo(Company_1.Company, { foreignKey: "companyId" });
//Application relationships
Application_1.Application.hasMany(Interview_1.Interview, { foreignKey: "applicationId" });
Interview_1.Interview.belongsTo(Application_1.Application, { foreignKey: "applicationId" });
// Recruiter relationships
Recruiter_1.Recruiter.hasMany(PostedJob_1.PostedJob, { foreignKey: "recruiterId" });
PostedJob_1.PostedJob.belongsTo(Recruiter_1.Recruiter, { foreignKey: "recruiterId" });
Recruiter_1.Recruiter.hasMany(Interview_1.Interview, { foreignKey: "recruiterId" });
Interview_1.Interview.belongsTo(Recruiter_1.Recruiter, { foreignKey: "recruiterId" });
//JobSeeker relationships
JobSeeker_1.JobSeeker.hasMany(Application_1.Application, { foreignKey: "jobSeekerId" });
Application_1.Application.belongsTo(JobSeeker_1.JobSeeker, { foreignKey: "jobSeekerId" });
JobSeeker_1.JobSeeker.hasMany(SideGig_1.SideGig, { foreignKey: "posterId" });
SideGig_1.SideGig.belongsTo(JobSeeker_1.JobSeeker, { foreignKey: "posterId" });
JobSeeker_1.JobSeeker.hasMany(WhatsappSession_1.WhatsappSession, { foreignKey: "jobSeekerId" });
WhatsappSession_1.WhatsappSession.belongsTo(JobSeeker_1.JobSeeker, { foreignKey: "jobSeekerId" });
JobSeeker_1.JobSeeker.hasMany(Escrow_1.Escrow, { as: "postedEscrows", foreignKey: "posterId" });
JobSeeker_1.JobSeeker.hasMany(Escrow_1.Escrow, {
    as: "applicantEscrows",
    foreignKey: "applicantId",
});
//Payment relationships
Payment_1.Payment.hasOne(ITN_1.ITN, { foreignKey: "paymentId" });
ITN_1.ITN.belongsTo(Payment_1.Payment, { foreignKey: "paymentId" });
Payment_1.Payment.hasOne(SideGigPayment_1.SideGigPayment, { foreignKey: "paymentId" });
SideGigPayment_1.SideGigPayment.belongsTo(Payment_1.Payment, { foreignKey: "paymentId" });
//SideGigPayment relationships
SideGigPayment_1.SideGigPayment.hasOne(Escrow_1.Escrow, { foreignKey: "sideGigPaymentId" });
Escrow_1.Escrow.belongsTo(SideGigPayment_1.SideGigPayment, { foreignKey: "sideGigPaymentId" });
//Escrow relationships
Escrow_1.Escrow.hasOne(Dispute_1.Dispute, { foreignKey: "escrowId" });
Dispute_1.Dispute.belongsTo(Escrow_1.Escrow, { foreignKey: "escrowId" });
Escrow_1.Escrow.belongsTo(JobSeeker_1.JobSeeker, { as: "poster", foreignKey: "posterId" });
Escrow_1.Escrow.belongsTo(JobSeeker_1.JobSeeker, { as: "applicant", foreignKey: "applicantId" });
