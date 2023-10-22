enum ROLES {
  ADMIN = 'admin',
  SELER = 'seller',
  CUSTOMER = 'customer',
}

type User = {
  username: string;
  role: ROLES;
};

const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN,
};
