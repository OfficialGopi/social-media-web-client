type IUser = {
  _id: string;
  username: string;
  gmail: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  dateOfBirth: Date;
  bio: string;
  gender: "MALE" | "FEMALE" | "OTHERS";
  websites: string[];
  isPrivate: boolean;
  profilePic?: string;

  createdAt: Date;
  updatedAt: Date;
};

export type { IUser };
