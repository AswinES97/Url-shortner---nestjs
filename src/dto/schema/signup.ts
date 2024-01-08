export class UserInfo {
  readonly userId?: string;
  readonly mail?: string;
  readonly password?: string;
}

export interface UserDoc {
  userId: string | unknown;
  mail: string;
  password: string;
}
