type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  role?: string;
  address?: {
    street?: string;
    city?: string;
    zip?: string;
  };
  createdAt: Date;
  updatedAt: Date;
};

export const users: UserType[] = [];
