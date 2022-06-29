import {
  EmailVarification,
  LisceneType,
  SignupMedium,
  UserType,
} from "src/entities/enums/user";

const userTypeData = [
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    first_name: "Demo",
    last_name: "User",
    email: "demo@user.com",
    signup_medium: SignupMedium.EMAIL,
    liscene_type: LisceneType.FREE,
    email_verfication: EmailVarification.VERIFIED,
    password: "admin@321",
    phone: "03236994882",
    address: "Joher Town Lahore",
    agree: true,
    userType: UserType.CLIENT,
    // userTypeId: "123e4567-e89b-12d3-a456-426614174000",
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174004",
    first_name: "Test",
    last_name: "Admin",
    email: "test@admin.com",
    signup_medium: SignupMedium.EMAIL,
    liscene_type: LisceneType.FREE,
    email_verfication: EmailVarification.VERIFIED,
    password: "admin@321",
    phone: "03236994882",
    address: "Joher Town Lahore",
    agree: true,
    // userTypeId: "123e4567-e89b-12d3-a456-426614174001",
    userType: UserType.CLIENT,
  },
];

export default userTypeData;
