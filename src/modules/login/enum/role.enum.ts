export const DUMMY_ROLE = [
  {
    roleId: 1,
    roleName: 'Admin',
    permissions: {
      search: true,
      view: true,
      edit: true,
      add: true,
      delete: true,
    },
  },
  {
    roleId: 2,
    roleName: 'User',
    permissions: {
      search: true,
      view: true,
      edit: false,
      add: false,
      delete: false,
    },
  },
];
