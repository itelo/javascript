import { isTruthy } from '@clerk/shared/underscore';

import type { NextClerkProviderProps } from '../types';

export const mergeNextClerkPropsWithEnv = (props: Omit<NextClerkProviderProps, 'children'>) => {
  return {
    ...props,
    publishableKey: props.publishableKey || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || '',
    clerkJSUrl: props.clerkJSUrl || process.env.NEXT_PUBLIC_CLERK_JS,
    clerkJSVersion: props.clerkJSVersion || process.env.NEXT_PUBLIC_CLERK_JS_VERSION,
    proxyUrl: props.proxyUrl || process.env.NEXT_PUBLIC_CLERK_PROXY_URL || '',
    domain: props.domain || process.env.NEXT_PUBLIC_CLERK_DOMAIN || '',
    isSatellite: props.isSatellite || isTruthy(process.env.NEXT_PUBLIC_CLERK_IS_SATELLITE),
    signInUrl: props.signInUrl || process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || '',
    signUpUrl: props.signUpUrl || process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || '',
    afterSignInUrl: props.afterSignInUrl || process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || '',
    afterSignUpUrl: props.afterSignUpUrl || process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || '',
    sdkMetadata: {
      name: PACKAGE_NAME,
      version: PACKAGE_VERSION,
    },
  };
};
