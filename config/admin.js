module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ebd9b7e8c4ac1deda6b394788532dd5'),
  },
});
