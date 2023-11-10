import { SignIn as BaseSignIn, SignUp as BaseSignUp } from '@clerk/clerk-react';
import type { SignInProps, SignUpProps } from '@clerk/types';
import React from 'react';

import { useClerkRemixOptions } from './RemixOptionsContext';

export const SignIn = (props: SignInProps) => {
  const { signInUrl } = useClerkRemixOptions();
  const { routing, path, ...restProps } = props;

  if (signInUrl) {
    return (
      <BaseSignIn
        routing={path || signInUrl ? 'path' : routing}
        path={path || signInUrl}
        {...restProps}
      />
    );
  }
  return <BaseSignIn {...props} />;
};

export const SignUp = (props: SignUpProps) => {
  const { signUpUrl } = useClerkRemixOptions();
  const { routing, path, ...restProps } = props;

  if (signUpUrl) {
    return (
      <BaseSignUp
        routing={path || signUpUrl ? 'path' : routing}
        path={path || signUpUrl}
        {...restProps}
      />
    );
  }
  return <BaseSignUp {...props} />;
};
