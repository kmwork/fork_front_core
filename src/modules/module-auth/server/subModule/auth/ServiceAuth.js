/* eslint-disable camelcase */
import i18n from '../../../../../common/utils/i18n-utils';
import {
  parseToUniError,
  ThrowableUniError,
} from '../../../../../common/models/uni-error';

import {
  AUTH_TYPES,
  getHeadersByAuthType,
} from '../../../../../server/utils/auth-utils';
import {
  sendEndpointMethodRequest,
  getEndpointServiceUrl,
} from '../../../../../server/utils/send-server-request';

import serverConfig from '../../../../../server/server-config';

import CoreService from '../../../../../server/services/utils/CoreService';
import { joinPath } from '../../../../../common/utils/uri-utils';

/**
 * Клиенсткая реализация протокола OAuth 2.0 Bearer
 * @param endpointServiceConfig
 * @returns {{ authValidate, authLogin }}
 */
export default class ServiceAuth extends CoreService {
  urls = {};

  constructor(endpointServiceConfig, urls, options) {
    super(endpointServiceConfig, options);

    this.urls = {
      authSignup: '/auth/signup',
      authSignin: '/auth/signin',

      authSocialProviderSignin: '/auth/{provider}',

      authRefresh: '/auth/signin',
      authValidate: '/auth/user',
      authSignout: '/auth/signout',
      authForgot: '/auth/forgot',
      authReset: '/auth/reset',
      ...urls,
    };
  }

  getClientInfo() {
    return {
      client_id:
        serverConfig.server.features.auth.applicationClientInfo.client_id,
      client_secret:
        serverConfig.server.features.auth.applicationClientInfo.client_secret,
    };
  }

  getSocialAuthUrl(provider, projectCallbackUrl = undefined) {
    const {
      client_id,
      // client_secret,
    } = this.getClientInfo();

    return joinPath(
      getEndpointServiceUrl(this.endpointServiceConfig, this.urls.authSocialProviderSignin, { provider }),
      {
        provider,
        client_id,
        projectCallbackUrl,
      },
    );
  }

  async authSignup(userData, emailOptions = null) {
    return this.send(
      this.urls.authSignup,
      {
        userData,
        ...this.getClientInfo(),
        emailOptions,
      },
      {
        method: 'post',
      },
    );
  }

  /*
   "access_token": "395549ac90cd6f37cbc28c6cb5b31aa8ffe2a22826831dba11d6baae9dafb07a",
   "refresh_token": "857896e0aab5b35456f6432ef2f812a344e2a3bab12d38b152ee3dd968442613",
   "expires_in": 299, (seconds)
   "token_type": "Bearer"
   */
  authLogin(username, password) {
    return this.send(
      this.urls.authSignin,
      {
        // @NOTE: необходимо учитывать snake запись (_) это стандарт
        grant_type: 'password',
        username,
        password,
        ...this.getClientInfo(),
      },
      {
        method: 'post',
      },
    )
      // .then((results) => {
      //   // стандарт работает на секундах, а сервер на милисекундах
      //   // https://developers.google.com/identity/protocols/OAuth2UserAgent#validate-access-token
      //   // eslint-disable-next-line no-param-reassign
      //   results.expires_in *= 1000;
      //   return results;
      // })
      .catch(error => {
        // eslint-disable-next-line no-param-reassign
        const uniError = parseToUniError(error);
        if (
          uniError.originalObject
          && uniError.originalObject.error_description
        ) {
          let clientErrorMessage;

          // switch (uniError.originalObject.error_description) {
          switch (uniError.originalObject.error) {
            case 'Invalid resource owner credentials':
              clientErrorMessage = i18n('errors.wrongUserCredentials');
              break;
            case 'Missing required parameter: password':
              clientErrorMessage = i18n('errors.missingPassword');
              break;
            default:
              // clientErrorMessage = uniError.originalObject.error_description;
              clientErrorMessage = uniError.originalObject.error;
          }
          uniError.clientErrorMessage = clientErrorMessage;
        }

        throw new ThrowableUniError(uniError);
      });
  }

  /*
   "access_token": "395549ac90cd6f37cbc28c6cb5b31aa8ffe2a22826831dba11d6baae9dafb07a",
   "refresh_token": "857896e0aab5b35456f6432ef2f812a344e2a3bab12d38b152ee3dd968442613",
   "expires_in": 299, seconds
   "token_type": "Bearer"
   */
  authRefresh(refreshToken) {
    return this.send(
      this.urls.authRefresh,
      {
        ...this.getClientInfo(),
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      },
      {
        method: 'post',
      },
    );
    // .then((results) => {
    //   // стандарт работает на секундах, а сервер на милисекундах
    //   // eslint-disable-next-line no-param-reassign
    //   results.expires_in *= 1000;
    //   return results;
    // })
  }

  /*
   {
   "user_id": "59ba24251d1c69466ca3346b",
   "name": "ivanovI",
   "scope": "*"
   }
   */
  authValidate(token, authType = AUTH_TYPES.BEARER) {
    // todo @ANKU @LOW - заиспользовать разные типы
    return sendEndpointMethodRequest(
      this.endpointServiceConfig,
      this.urls.authValidate,
      'get',
      null,
      null,
      {
        headers: getHeadersByAuthType(token, authType),
      },
    );
  }

  authLogout(token, authType = AUTH_TYPES.BEARER) {
    return sendEndpointMethodRequest(
      this.endpointServiceConfig,
      this.urls.authSignout,
      'get',
      null,
      null,
      {
        headers: getHeadersByAuthType(token, authType),
      },
    );
  }

  /**
   * Протокол для @kmwork/auth-server@1.0.4
   *
   * @param email
   * @param resetPasswordPageUrl
   * @param emailOptions
   * @return {*}
   */
  async authForgot(email, resetPasswordPageUrl, emailOptions) {
    return this.send(
      this.urls.authForgot,
      'post',
      {
        email,
        emailOptions,

        resetPasswordPageUrl,

        ...this.getClientInfo(),
      },
      {
        method: 'post',
      },
    );
  }

  /**
   * Протокол для @kmwork/auth-server@1.0.4
   *
   * @param resetPasswordToken
   * @param newPassword
   * @param emailOptions
   * @return {Promise.<*>}
   */
  async authResetPassword(resetPasswordToken, newPassword, emailOptions) {
    return this.send(
      this.urls.authReset,
      {
        resetPasswordToken,
        newPassword,

        emailOptions,

        ...this.getClientInfo(),
      },
      {
        method: 'post',
      },
    );
  }
}