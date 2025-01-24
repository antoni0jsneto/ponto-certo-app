interface User {
  fullName: string;
  email: string;
  terms: boolean;
  provider: 'firebase' | 'google';
}

export default User;
