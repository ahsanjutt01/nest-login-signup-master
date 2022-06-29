enum UserStatus {
  ACTIVE = 1,
  INACTIVE = 2,
  PURGED = 3,
}

enum SignupMedium {
  GOOGLE = 1,
  FACEBOOK = 2,
  APPLE = 3,
  EMAIL = 4,
}

enum EmailVarification {
  PENDING = 1,
  VERIFIED = 2,
}

enum LisceneType {
  FREE = 1,
  PAID = 2,
}

enum UserType {
  SUPER_ADMIN = 1,
  CLIENT = 2,
}

export { UserStatus, SignupMedium, EmailVarification, LisceneType, UserType };
