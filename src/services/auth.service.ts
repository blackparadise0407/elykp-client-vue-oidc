import { config } from '~/config';

declare const Oidc: any;

export class AuthService {
  private userManager: any;

  constructor() {
    const settings: any = {
      authority: config.oidc.issuer,
      client_id: config.oidc.clientId,
      redirect_uri: window.location.origin + '/signin-callback.html',
      automaticSilentRenew: true,
      silent_redirect_uri: window.location.origin + '/silent-renew.html',
      response_type: 'code',
      scope: 'openid profile elykp-api',
      post_logout_redirect_uri: window.location.origin,
    };
    this.userManager = new Oidc.UserManager(settings);
  }

  public getUser(): Promise<User> {
    return this.userManager.getUser();
  }

  public login(): Promise<void> {
    return this.userManager.signinRedirect();
  }

  public logout(): Promise<void> {
    return this.userManager.signoutRedirect();
  }

  public getAccessToken(): Promise<string> {
    return this.userManager.getUser().then((data: any) => {
      return data.access_token;
    });
  }
}
