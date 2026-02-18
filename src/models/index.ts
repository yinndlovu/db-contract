import { User } from "./user/User";
import { Role } from "./user/Role";
import { UserRole } from "./user/UserRole";
import { Otp } from "./user/Otp";
import { JobSeeker } from "./user/JobSeeker";
import { Recruiter } from "./user/Recruiter";
import { Moderator } from "./user/Moderator";
import { Rating } from "./user/Rating";
import { Interview } from "./application/Interview";
import { WhatsappSession } from "./user/WhatsappSession";
import { Company } from "./company/Company";
import { Job } from "./job/Job";
import { PostedJob } from "./job/PostedJob";
import { ScrappedJob } from "./job/ScrappedJob";
import { SideGig } from "./job/SideGig";
import { Application } from "./application/Application";
import { Payment } from "./payment/Payment";
import { ITN } from "./payment/ITN";
import { SideGigPayment } from "./payment/SideGigPayment";
import { Escrow } from "./payment/Escrow";
import { Dispute } from "./payment/Dispute";

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

export {
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
