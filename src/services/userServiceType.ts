import { IconType } from "react-icons";

export type TSendEmailReq = {
  name: string;
  countryCode: string;
  mobileNo: string;
  email: string;
  subject: string;
  message: string;
};

type Skill = {
  name: string;
  experience: string;
  icon: IconType;
  icnColor: string;
};

type Project = {
  id: number;
  name: string;
  desc: string;
};

export type ProfileDetail = {
  FullName: string;
  Name: string;
  Role: string;
  MobileNo: string;
  MobileNoForView: string;
  Email1: string;
  AllEmail: string;
  LinkedIn: string;
  WhatsAppNo: string;
  Experience: string;
  ResumeLink: string;
  ShortBio: string;
  UpdatedAt: string;
  Skills: Skill[];
  Projects: Project[];
};
