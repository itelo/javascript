import type { JwtPayload } from '@clerk/types';

import { API_KEY, API_URL, JWT_KEY } from '../constants';
import { type VerifyJwtOptions, decodeJwt, verifyJwt } from './jwt';
import { loadClerkJWKFromLocal, loadClerkJWKFromRemote, LoadClerkJWKFromRemoteOptions } from './keys';

/**
 *
 */
export type VerifyTokenOptions = Pick<
  VerifyJwtOptions,
  'authorizedParties' | 'audience' | 'issuer' | 'clockSkewInSeconds'
> &
  Pick<LoadClerkJWKFromRemoteOptions, 'apiKey' | 'apiUrl' | 'jwksTtlInMs'>;

export async function verifyToken(token: string, options: VerifyTokenOptions): Promise<JwtPayload> {
  const { apiKey = API_KEY, apiUrl = API_URL, authorizedParties, clockSkewInSeconds, issuer, jwksTtlInMs } = options;

  const { header } = decodeJwt(token);
  const { kid } = header;

  let key;

  if (JWT_KEY) {
    key = await loadClerkJWKFromLocal(JWT_KEY);
  } else if (apiKey) {
    // TODO: Fetch JWKS from Frontend API instead of Backend API
    //
    // Currently JWKS are fetched from Backend API without using the JWT issuer. This should change
    // with the new Backend key format so that the API Key is not required for token verification and
    // the jwks retrieval is driven from the current JWT header.
    key = await loadClerkJWKFromRemote({
      apiUrl,
      apiKey,
      kid,
      jwksTtlInMs,
    });
  } else {
    throw new Error('Failed to resolve JWK during verification');
  }

  const result = await verifyJwt(token, {
    authorizedParties,
    clockSkewInSeconds,
    key,
    issuer,
  });

  if (!result.valid) {
    throw new Error(result.reason);
  }

  return result.payload;
}