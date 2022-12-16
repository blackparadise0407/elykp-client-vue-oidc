export const config = {
  oidc: {
    issuer:
      import.meta.env.VITE_OIDC_ISSUER || 'http://localhost:8080/realms/master',
    clientId: import.meta.env.VITE_OIDC_CLIENT_ID || 'elykp-client',
  },
};
