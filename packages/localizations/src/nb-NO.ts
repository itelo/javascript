import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Sjekk telefonen din',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: 'Verifiseringskode',
      formSubtitle: 'Skriv inn verifiseringskoden sendt til telefonnummeret ditt',
      resendButton: 'Send kode på nytt',
    },
  },
} as const;

export const nbNO: LocalizationResource = {
  locale: 'nb-NO',
  socialButtonsBlockButton: 'Fortsett med {{provider|titleize}}',
  dividerText: 'eller',
  formFieldLabel__emailAddress: 'E-postadresse',
  formFieldLabel__emailAddresses: 'E-postadresser',
  formFieldLabel__phoneNumber: 'Telefonnummer',
  formFieldLabel__username: 'Brukernavn',
  formFieldLabel__emailAddress_username: 'E-postadresse eller brukernavn',
  formFieldLabel__password: 'Passord',
  formFieldLabel__currentPassword: 'Nåværende passord',
  formFieldLabel__newPassword: 'Nytt passord',
  formFieldLabel__confirmPassword: 'Bekreft passord',
  formFieldLabel__signOutOfOtherSessions: 'Logg ut fra alle andre enheter',
  formFieldLabel__firstName: 'Fornavn',
  formFieldLabel__lastName: 'Etternavn',
  formFieldLabel__backupCode: 'Sikkerhetskode',
  formFieldLabel__organizationName: 'Organisasjonsnavn',
  formFieldLabel__organizationSlug: 'Slug URL',
  formFieldLabel__role: 'Rolle',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    'Skriv inn eller lim inn én eller flere e-postadresser, separert med mellomrom eller komma',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldError__notMatchingPasswords: `Passordene stemmer ikke overens.`,
  formFieldError__matchingPasswords: 'Passordene stemmer overens.',
  formFieldAction__forgotPassword: 'Glemt passord?',
  formFieldHintText__optional: 'Valgfritt',
  formButtonPrimary: 'Fortsett',
  signInEnterPasswordTitle: 'Skriv inn passordet ditt',
  backButton: 'Tilbake',
  footerActionLink__useAnotherMethod: 'Bruk en annen metode',
  badge__primary: 'Primær',
  badge__thisDevice: 'Denne enheten',
  badge__userDevice: 'Brukerens enhet',
  badge__otherImpersonatorDevice: 'Annen imitators enhet',
  badge__default: 'Standard',
  badge__unverified: 'Ikke verifisert',
  badge__requiresAction: 'Krever handling',
  badge__you: 'Du',
  footerPageLink__help: 'Hjelp',
  footerPageLink__privacy: 'Personvern',
  footerPageLink__terms: 'Vilkår',
  paginationButton__previous: 'Forrige',
  paginationButton__next: 'Neste',
  paginationRowText__displaying: 'Viser',
  paginationRowText__of: 'av',
  membershipRole__admin: 'Administrator',
  membershipRole__basicMember: 'Medlem',
  membershipRole__guestMember: 'Gjest',
  signUp: {
    start: {
      title: 'Opprett kontoen din',
      subtitle: 'for å fortsette til {{applicationName}}',
      actionText: 'Har du allerede en konto?',
      actionLink: 'Logg inn',
    },
    emailLink: {
      title: 'Verifiser e-posten din',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: 'Verifiseringslenke',
      formSubtitle: 'Bruk verifiseringslenken som er sendt til e-postadressen din',
      resendButton: 'Send lenke på nytt',
      verified: {
        title: 'Registreringen var vellykket',
      },
      loading: {
        title: 'Registrerer deg...',
      },
      verifiedSwitchTab: {
        title: 'E-posten ble verifisert',
        subtitle: 'Gå tilbake til den nylig åpnede fanen for å fortsette',
        subtitleNewTab: 'Gå tilbake til forrige fane for å fortsette',
      },
    },
    emailCode: {
      title: 'Verifiser e-posten din',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: 'Verifiseringskode',
      formSubtitle: 'Skriv inn verifiseringskoden som er sendt til e-postadressen din',
      resendButton: 'Send kode på nytt',
    },
    phoneCode: {
      title: 'Verifiser telefonen din',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: 'Verifiseringskode',
      formSubtitle: 'Skriv inn verifiseringskoden som er sendt til telefonnummeret ditt',
      resendButton: 'Send kode på nytt',
    },
    continue: {
      title: 'Fyll ut manglende felt',
      subtitle: 'for å fortsette til {{applicationName}}',
      actionText: 'Har du allerede en konto?',
      actionLink: 'Logg inn',
    },
  },
  signIn: {
    start: {
      title: 'Logg inn',
      subtitle: 'for å fortsette til {{applicationName}}',
      actionText: 'Ingen konto?',
      actionLink: 'Opprett konto',
      actionLink__use_email: 'Bruk e-post',
      actionLink__use_phone: 'Bruk telefon',
      actionLink__use_username: 'Bruk brukernavn',
      actionLink__use_email_username: 'Bruk e-post eller brukernavn',
    },
    password: {
      title: 'Skriv inn passordet ditt',
      subtitle: 'for å fortsette til {{applicationName}}',
      actionLink: 'Bruk en annen metode',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Glemt passord?',
      label__alternativeMethods: 'Eller logg inn med en annen metode.',
      blockButton__resetPassword: 'Tilbakestill passordet ditt',
    },
    forgotPassword: {
      title_email: 'Sjekk e-posten din',
      title_phone: 'Sjekk telefonen din',
      subtitle: 'for å tilbakestille passordet ditt',
      formTitle: 'Tilbakestill passord-kode',
      formSubtitle_email: 'Skriv inn koden som er sendt til e-postadressen din',
      formSubtitle_phone: 'Skriv inn koden som er sendt til telefonnummeret ditt',
      resendButton: 'Send kode på nytt',
    },
    resetPassword: {
      title: 'Tilbakestill passordet',
      formButtonPrimary: 'Tilbakestill passordet',
      successMessage: 'Passordet ditt er blitt tilbakestilt. Logger deg inn, vennligst vent et øyeblikk.',
    },
    resetPasswordMfa: {
      detailsLabel: 'Vi må bekrefte identiteten din før vi tilbakestiller passordet ditt.',
    },
    emailCode: {
      title: 'Sjekk e-posten din',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: 'Verifiseringskode',
      formSubtitle: 'Skriv inn verifiseringskoden som er sendt til e-postadressen din',
      resendButton: 'Send kode på nytt',
    },
    emailLink: {
      title: 'Sjekk e-posten din',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: 'Verifiseringslenke',
      formSubtitle: 'Bruk verifiseringslenken som er sendt til e-postadressen din',
      resendButton: 'Send lenke på nytt',
      unusedTab: {
        title: 'Du kan lukke denne fanen',
      },
      verified: {
        title: 'Innloggingen var vellykket',
        subtitle: 'Du blir omdirigert snart',
      },
      verifiedSwitchTab: {
        subtitle: 'Gå tilbake til den opprinnelige fanen for å fortsette',
        titleNewTab: 'Logget inn på en annen fane',
        subtitleNewTab: 'Gå tilbake til den nyåpnede fanen for å fortsette',
      },
      loading: {
        title: 'Logger inn...',
        subtitle: 'Du blir omdirigert snart',
      },
      failed: {
        title: 'Denne verifiseringslenken er ugyldig',
        subtitle: 'Gå tilbake til den opprinnelige fanen for å fortsette.',
      },
      expired: {
        title: 'Denne verifiseringslenken er utløpt',
        subtitle: 'Gå tilbake til den opprinnelige fanen for å fortsette.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'To-trinns verifisering',
      subtitle: '',
      formTitle: 'Verifiseringskode',
      formSubtitle: 'Skriv inn verifiseringskoden generert av autentiseringsappen din',
    },
    backupCodeMfa: {
      title: 'Skriv inn en sikkerhetskopi-kode',
      subtitle: 'for å fortsette til {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Bruk en annen metode',
      actionLink: 'Få hjelp',
      blockButton__emailLink: 'Send lenke til {{identifier}}',
      blockButton__emailCode: 'Send e-postkode til {{identifier}}',
      blockButton__phoneCode: 'Send SMS-kode til {{identifier}}',
      blockButton__password: 'Logg inn med passordet ditt',
      blockButton__totp: 'Bruk autentiseringsappen din',
      blockButton__backupCode: 'Bruk en sikkerhetskopi-kode',
      getHelp: {
        title: 'Få hjelp',
        content: `Hvis du har problemer med å logge inn på kontoen din, kan du sende oss en e-post, og vi vil jobbe med deg for å gjenopprette tilgangen så snart som mulig.`,
        blockButton__emailSupport: 'Kontakt kundestøtte via e-post',
      },
    },
    noAvailableMethods: {
      title: 'Kan ikke logge inn',
      subtitle: 'En feil oppstod',
      message: 'Kan ikke fortsette med innloggingen. Det er ingen tilgjengelige autentiseringsfaktorer.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Meny',
    formButtonPrimary__continue: 'Fortsett',
    formButtonPrimary__finish: 'Fullfør',
    formButtonReset: 'Avbryt',
    start: {
      headerTitle__account: 'Konto',
      headerTitle__security: 'Sikkerhet',
      headerSubtitle__account: 'Administrer kontoinformasjonen din',
      headerSubtitle__security: 'Administrer sikkerhetsinnstillingene dine',
      profileSection: {
        title: 'Profil',
      },
      usernameSection: {
        title: 'Brukernavn',
        primaryButton__changeUsername: 'Endre brukernavn',
        primaryButton__setUsername: 'Angi brukernavn',
      },
      emailAddressesSection: {
        title: 'E-postadresser',
        primaryButton: 'Legg til en e-postadresse',
        detailsTitle__primary: 'Primær e-postadresse',
        detailsSubtitle__primary: 'Denne e-postadressen er den primære e-postadressen',
        detailsAction__primary: 'Fullfør verifisering',
        detailsTitle__nonPrimary: 'Angi som primær e-postadresse',
        detailsSubtitle__nonPrimary:
          'Angi denne e-postadressen som primær for å motta kommunikasjon angående kontoen din.',
        detailsAction__nonPrimary: 'Angi som primær',
        detailsTitle__unverified: 'E-postadresse ikke verifisert',
        detailsSubtitle__unverified: 'Denne e-postadressen er ikke verifisert og kan ha begrenset funksjonalitet',
        detailsAction__unverified: 'Fullfør verifisering',
        destructiveActionTitle: 'Fjern',
        destructiveActionSubtitle: 'Slett denne e-postadressen og fjern den fra kontoen din',
        destructiveAction: 'Fjern e-postadresse',
      },
      phoneNumbersSection: {
        title: 'Telefonnumre',
        primaryButton: 'Legg til et telefonnummer',
        detailsTitle__primary: 'Primært telefonnummer',
        detailsSubtitle__primary: 'Dette telefonnummeret er det primære telefonnummeret',
        detailsAction__primary: 'Fullfør verifisering',
        detailsTitle__nonPrimary: 'Angi som primært telefonnummer',
        detailsSubtitle__nonPrimary:
          'Angi dette telefonnummeret som primært for å motta kommunikasjon angående kontoen din.',
        detailsAction__nonPrimary: 'Angi som primær',
        detailsTitle__unverified: 'Telefonnummer ikke verifisert',
        detailsSubtitle__unverified: 'Dette telefonnummeret er ikke verifisert og kan ha begrenset funksjonalitet',
        detailsAction__unverified: 'Fullfør verifisering',
        destructiveActionTitle: 'Fjern',
        destructiveActionSubtitle: 'Slett dette telefonnummeret og fjern det fra kontoen din',
        destructiveAction: 'Fjern telefonnummer',
      },
      connectedAccountsSection: {
        title: 'Tilkoblede kontoer',
        primaryButton: 'Koble til konto',
        title__connectionFailed: 'Prøv på nytt etter mislykket tilkobling',
        title__reauthorize: 'Ny autorisasjon kreves',
        subtitle__reauthorize:
          'De nødvendige tillatelsene har blitt oppdatert, og du kan oppleve begrenset funksjonalitet. Vennligst autoriser denne applikasjonen på nytt for å unngå problemer.',
        actionLabel__connectionFailed: 'Prøv på nytt',
        actionLabel__reauthorize: 'Autoriser nå',
        destructiveActionTitle: 'Fjern',
        destructiveActionSubtitle: 'Fjern denne tilkoblede kontoen fra kontoen din',
        destructiveActionAccordionSubtitle: 'Fjern tilkoblet konto',
      },
      enterpriseAccountsSection: {
        title: 'Bedriftskontoer',
      },
      passwordSection: {
        title: 'Passord',
        primaryButton__changePassword: 'Endre passord',
        primaryButton__setPassword: 'Opprett passord',
      },
      mfaSection: {
        title: 'To-trinns verifisering',
        primaryButton: 'Legg til to-trinns verifisering',
        phoneCode: {
          destructiveActionTitle: 'Fjern',
          destructiveActionSubtitle: 'Fjern dette telefonnummeret fra to-trinns verifisering',
          destructiveActionLabel: 'Fjern telefonnummer',
          title__default: 'Standardfaktor',
          title__setDefault: 'Angi som standardfaktor',
          subtitle__default:
            'Denne faktoren vil bli brukt som standard to-trinns verifiseringsmetode når du logger inn.',
          subtitle__setDefault:
            'Angi denne faktoren som standard for å bruke den som standard to-trinns verifiseringsmetode når du logger inn.',
          actionLabel__setDefault: 'Angi som standard',
        },
        backupCodes: {
          headerTitle: 'Sikkerhetskoder',
          title__regenerate: 'Generer nye sikkerhetskoder',
          subtitle__regenerate:
            'Få en ny serie med sikre sikkerhetskoder. Tidligere sikkerhetskoder vil bli slettet og kan ikke brukes.',
          actionLabel__regenerate: 'Generer koder på nytt',
        },
        totp: {
          headerTitle: 'Autentiseringsapplikasjon',
          title: 'Standardfaktor',
          subtitle: 'Denne faktoren vil bli brukt som standard to-trinns verifiseringsmetode når du logger inn.',
          destructiveActionTitle: 'Fjern',
          destructiveActionSubtitle: 'Fjern autentiseringsapplikasjonen fra to-trinns verifisering',
          destructiveActionLabel: 'Fjern autentiseringsapplikasjon',
        },
      },
      activeDevicesSection: {
        title: 'Aktive enheter',
        primaryButton: 'Aktive enheter',
        detailsTitle: 'Nåværende enhet',
        detailsSubtitle: 'Dette er enheten du bruker for øyeblikket',
        destructiveActionTitle: 'Logg ut',
        destructiveActionSubtitle: 'Logg ut fra kontoen din på denne enheten',
        destructiveAction: 'Logg ut fra enhet',
      },
      web3WalletsSection: {
        title: 'Web3-lommebøker',
        primaryButton: 'Web3-lommebøker',
        destructiveActionTitle: 'Fjern',
        destructiveActionSubtitle: 'Fjern denne web3-lommeboken fra kontoen din',
        destructiveAction: 'Fjern lommebok',
      },
      dangerSection: {
        title: 'Fare',
        deleteAccountButton: 'Slett konto',
        deleteAccountTitle: 'Slett konto',
        deleteAccountDescription: 'Slett kontoen din og all tilknyttet data',
      },
    },
    profilePage: {
      title: 'Oppdater profil',
      imageFormTitle: 'Profilbilde',
      imageFormSubtitle: 'Last opp bilde',
      imageFormDestructiveActionSubtitle: 'Fjern bilde',
      fileDropAreaTitle: 'Dra filen hit eller...',
      fileDropAreaAction: 'Velg fil',
      fileDropAreaHint: 'Last opp et JPG, PNG, GIF eller WEBP-bilde som er mindre enn 10 MB',
      readonly: 'Informasjonen om profilen din er levert av bedriftstilkoblingen og kan ikke redigeres.',
      successMessage: 'Profilen din har blitt oppdatert.',
    },
    usernamePage: {
      title: 'Oppdater brukernavn',
      successMessage: 'Brukernavnet ditt har blitt oppdatert.',
    },
    emailAddressPage: {
      title: 'Legg til e-postadresse',
      emailCode: {
        formHint: 'En e-post med en verifiseringskode vil bli sendt til denne e-postadressen.',
        formTitle: 'Verifiseringskode',
        formSubtitle: 'Skriv inn verifiseringskoden som er sendt til {{identifier}}',
        resendButton: 'Send kode på nytt',
        successMessage: 'E-posten {{identifier}} har blitt lagt til kontoen din.',
      },
      emailLink: {
        formHint: 'En e-post med en verifiseringslenke vil bli sendt til denne e-postadressen.',
        formTitle: 'Verifiseringslenke',
        formSubtitle: 'Klikk på verifiseringslenken i e-posten sendt til {{identifier}}',
        resendButton: 'Send lenke på nytt',
        successMessage: 'E-posten {{identifier}} har blitt lagt til kontoen din.',
      },
      removeResource: {
        title: 'Fjern e-postadresse',
        messageLine1: '{{identifier}} vil bli fjernet fra denne kontoen.',
        messageLine2: 'Du vil ikke lenger kunne logge inn med denne e-postadressen.',
        successMessage: '{{emailAddress}} har blitt fjernet fra kontoen din.',
      },
    },
    phoneNumberPage: {
      title: 'Legg til telefonnummer',
      successMessage: '{{identifier}} har blitt lagt til kontoen din.',
      infoText: 'En tekstmelding med en verifiseringslenke vil bli sendt til dette telefonnummeret.',
      infoText__secondary: 'Meldings- og datatilleggskostnader kan påløpe.',
      removeResource: {
        title: 'Fjern telefonnummer',
        messageLine1: '{{identifier}} vil bli fjernet fra denne kontoen.',
        messageLine2: 'Du vil ikke lenger kunne logge inn med dette telefonnummeret.',
        successMessage: '{{phoneNumber}} har blitt fjernet fra kontoen din.',
      },
    },
    connectedAccountPage: {
      title: 'Legg til tilknyttet konto',
      formHint: 'Velg en tilbyder for å koble til kontoen din.',
      formHint__noAccounts: 'Det er ingen tilgjengelige eksterne konto-tilbydere.',
      socialButtonsBlockButton: 'Koble til {{provider|titleize}}-konto',
      successMessage: 'Tilbyderen har blitt lagt til kontoen din.',
      removeResource: {
        title: 'Fjern tilknyttet konto',
        messageLine1: '{{identifier}} vil bli fjernet fra denne kontoen.',
        messageLine2:
          'Du vil ikke lenger kunne bruke denne tilknyttede kontoen, og eventuelle avhengige funksjoner vil ikke lenger fungere.',
        successMessage: '{{connectedAccount}} har blitt fjernet fra kontoen din.',
      },
    },
    web3WalletPage: {
      title: 'Legg til web3-lommebok',
      subtitle__availableWallets: 'Velg en web3-lommebok for å koble til kontoen din.',
      subtitle__unavailableWallets: 'Det er ingen tilgjengelige web3-lommebøker.',
      successMessage: 'Lommeboken har blitt lagt til kontoen din.',
      removeResource: {
        title: 'Fjern web3-lommebok',
        messageLine1: '{{identifier}} vil bli fjernet fra denne kontoen.',
        messageLine2: 'Du vil ikke lenger kunne logge inn med denne web3-lommeboken.',
        successMessage: '{{web3Wallet}} har blitt fjernet fra kontoen din.',
      },
    },
    passwordPage: {
      title: 'Sett passord',
      changePasswordTitle: 'Endre passord',
      readonly: 'Passordet ditt kan for øyeblikket ikke endres fordi du kun kan logge inn via bedriftstilkoblingen.',
      successMessage: 'Passordet ditt er satt.',
      changePasswordSuccessMessage: 'Passordet ditt har blitt oppdatert.',
      sessionsSignedOutSuccessMessage: 'Alle andre enheter har blitt logget ut.',
    },
    mfaPage: {
      title: 'Legg til to-trinns verifisering',
      formHint: 'Velg en metode for å legge til.',
    },
    mfaTOTPPage: {
      title: 'Legg til autentiseringsapp',
      verifyTitle: 'Verifiseringskode',
      verifySubtitle: 'Skriv inn verifiseringskoden generert av autentiseringsappen din',
      successMessage:
        'To-trinns verifisering er nå aktivert. Når du logger inn, må du angi en verifiseringskode fra denne autentiseringsappen som et ekstra trinn.',
      authenticatorApp: {
        infoText__ableToScan:
          'Sett opp en ny innloggingsmetode i autentiseringsappen din og skann følgende QR-kode for å koble den til kontoen din.',
        infoText__unableToScan:
          'Sett opp en ny innloggingsmetode i autentiseringsappen og skriv inn nøkkelen som er oppgitt nedenfor.',
        inputLabel__unableToScan1:
          'Sørg for at tidsbaserte eller engangspassord er aktivert, og fullfør deretter koblingen av kontoen din.',
        inputLabel__unableToScan2:
          'Alternativt, hvis autentiseringsappen din støtter TOTP URI-er, kan du også kopiere hele URI-en.',
        buttonAbleToScan__nonPrimary: 'Skan QR-kode i stedet',
        buttonUnableToScan__nonPrimary: 'Kan ikke skanne QR-kode?',
      },
      removeResource: {
        title: 'Fjern to-trinns verifisering',
        messageLine1: 'Verifiseringskoder fra denne autentiseringsappen vil ikke lenger være påkrevd ved pålogging.',
        messageLine2: 'Kontoen din kan bli mindre sikker. Er du sikker på at du vil fortsette?',
        successMessage: 'To-trinns verifisering via autentiseringsappen er fjernet.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Legg til SMS-kodeverifisering',
      primaryButton__addPhoneNumber: 'Legg til et telefonnummer',
      subtitle__availablePhoneNumbers:
        'Velg et telefonnummer for å registrere deg for SMS-kode to-trinns verifisering.',
      subtitle__unavailablePhoneNumbers:
        'Det er ingen tilgjengelige telefonnummer å registrere seg for SMS-kode to-trinns verifisering.',
      successMessage:
        'SMS-kode to-trinns verifisering er nå aktivert for dette telefonnummeret. Når du logger inn, må du angi en verifiseringskode sendt til dette telefonnummeret som et ekstra trinn.',
      removeResource: {
        title: 'Fjern to-trinns verifisering',
        messageLine1: '{{identifier}} vil ikke lenger motta verifiseringskoder ved pålogging.',
        messageLine2: 'Kontoen din kan bli mindre sikker. Er du sikker på at du vil fortsette?',
        successMessage: 'SMS-kode to-trinns verifisering er fjernet for {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Legg til sikkerhetskopieringskodeverifisering',
      title__codelist: 'Sikkerhetskoder',
      subtitle__codelist: 'Oppbevar dem sikkert og hold dem hemmelige.',
      infoText1: 'Sikkerhetskoder vil bli aktivert for denne kontoen.',
      infoText2:
        'Hold sikkerhetskodene hemmelige og oppbevar dem sikkert. Du kan generere nye sikkerhetskoder hvis du mistenker at de er kompromittert.',
      successSubtitle:
        'Du kan bruke en av disse til å logge inn på kontoen din hvis du mister tilgangen til autentiseringsenheten.',
      successMessage:
        'Sikkerhetskoder er nå aktivert. Du kan bruke en av disse til å logge inn på kontoen din hvis du mister tilgangen til autentiseringsenheten. Hver kode kan bare brukes én gang.',
      actionLabel__copy: 'Kopier alle',
      actionLabel__copied: 'Kopiert!',
      actionLabel__download: 'Last ned .txt',
      actionLabel__print: 'Skriv ut',
    },
    deletePage: {
      title: 'Slett konto',
      messageLine1: 'Er du sikker på at du vil slette kontoen din?',
      messageLine2: 'Denne handlingen er permanent og kan ikke reverseres.',
      confirm: 'Slett konto',
    },
  },
  userButton: {
    action__manageAccount: 'Administrer konto',
    action__signOut: 'Logg ut',
    action__signOutAll: 'Logg ut av alle kontoer',
    action__addAccount: 'Legg til konto',
  },
  organizationSwitcher: {
    personalWorkspace: 'Personlig arbeidsområde',
    notSelected: 'Ingen organisasjon valgt',
    action__createOrganization: 'Opprett organisasjon',
    action__manageOrganization: 'Administrer organisasjon',
  },
  impersonationFab: {
    title: 'Logget inn som {{identifier}}',
    action__signOut: 'Logg ut',
  },
  organizationProfile: {
    start: {
      headerTitle__members: 'Medlemmer',
      headerTitle__settings: 'Innstillinger',
      headerSubtitle__members: 'Vis og administrer organisasjonsmedlemmer',
      headerSubtitle__settings: 'Administrer organisasjonsinnstillinger',
    },
    profilePage: {
      title: 'Organisasjonsprofil',
      subtitle: 'Administrer organisasjonsprofil',
      successMessage: 'Organisasjonen er oppdatert.',
      dangerSection: {
        title: 'Fare',
        leaveOrganization: {
          title: 'Forlat organisasjonen',
          messageLine1:
            'Er du sikker på at du vil forlate denne organisasjonen? Du vil miste tilgangen til denne organisasjonen og dens applikasjoner.',
          messageLine2: 'Handlingen er permanent og kan ikke reverseres.',
          successMessage: 'Du har forlatt organisasjonen.',
        },
      },
    },
    invitePage: {
      title: 'Inviter medlemmer',
      subtitle: 'Inviter nye medlemmer til denne organisasjonen',
      successMessage: 'Invitasjoner er sendt',
      detailsTitle__inviteFailed: 'Invitasjonene kunne ikke sendes. Fiks følgende og prøv igjen:',
      formButtonPrimary__continue: 'Send invitasjoner',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Ingen medlemmer å vise',
      action__invite: 'Inviter',
      start: {
        headerTitle__active: 'Aktive',
        headerTitle__invited: 'Inviterte',
      },
      activeMembersTab: {
        tableHeader__user: 'Bruker',
        tableHeader__joined: 'Ble med',
        tableHeader__role: 'Rolle',
        tableHeader__actions: '',
        menuAction__remove: 'Fjern medlem',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Invitert',
        menuAction__revoke: 'Tilbakekall invitasjon',
      },
    },
  },
  createOrganization: {
    title: 'Opprett organisasjon',
    formButtonSubmit: 'Opprett organisasjon',
    subtitle: 'Angi organisasjonsprofilen',
    invitePage: {
      formButtonReset: 'Hopp over',
    },
  },
  unstable__errors: {
    form_identifier_not_found: '',
    captcha_invalid:
      'Registreringen mislyktes på grunn av mislykkede sikkerhetsvalideringer. Vennligst oppdater siden og prøv igjen, eller ta kontakt med brukerstøtte for mer hjelp.',
    form_password_pwned:
      'Dette passordet er funnet som en del av et datainnbrudd og kan ikke brukes. Vennligst prøv et annet passord.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'E-postadressen må være en gyldig e-postadresse',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Feil passord',
    form_password_not_strong_enough: 'Passordet ditt er ikke sterkt nok.',
    form_password_size_in_bytes_exceeded:
      'Passordet ditt har overskredet maksimalt antall byte tillatt. Vennligst forkort det eller fjern noen spesialtegn.',
    passwordComplexity: {
      sentencePrefix: 'Passordet ditt må inneholde',
      minimumLength: '{{length}} eller flere tegn',
      maximumLength: 'mindre enn {{length}} tegn',
      requireNumbers: 'et tall',
      requireLowercase: 'en liten bokstav',
      requireUppercase: 'en stor bokstav',
      requireSpecialCharacter: 'et spesialtegn',
    },
    zxcvbn: {
      notEnough: 'Passordet ditt er ikke sterkt nok.',
      couldBeStronger: 'Passordet ditt fungerer, men det kan være sterkere. Prøv å legge til flere tegn.',
      goodPassword: 'Godt jobbet. Dette er et utmerket passord.',
      warnings: {
        straightRow: 'Rette rader med tastene på tastaturet ditt er lett å gjette.',
        keyPattern: 'Korte tastaturmønstre er lett å gjette.',
        simpleRepeat: 'Gjentatte tegn som "aaa" er lett å gjette.',
        extendedRepeat: 'Gjentatte tegnmønstre som "abcabcabc" er lett å gjette.',
        sequences: 'Vanlige tegnsekvenser som "abc" er lett å gjette.',
        recentYears: 'Nylige år er lett å gjette.',
        dates: 'Datoer er lett å gjette.',
        topTen: 'Dette er et mye brukt passord.',
        topHundred: 'Dette er et ofte brukt passord.',
        common: 'Dette er et vanlig brukt passord.',
        similarToCommon: 'Dette ligner på et vanlig brukt passord.',
        wordByItself: 'Enkeltord er lett å gjette.',
        namesByThemselves: 'Enkelt navn eller etternavn er lett å gjette.',
        commonNames: 'Vanlige navn og etternavn er lett å gjette.',
        userInputs: 'Det bør ikke være personlige eller sidetilknyttede data.',
        pwned: 'Passordet ditt ble eksponert i et datainnbrudd på internett.',
      },
      suggestions: {
        l33t: "Unngå forutsigbare bokstavbytter som '@' for 'a'.",
        reverseWords: 'Unngå omvendte stavelser av vanlige ord.',
        allUppercase: 'Stor bokstav på noen, men ikke alle bokstaver.',
        capitalization: 'Sett stor bokstav på mer enn den første bokstaven.',
        dates: 'Unngå datoer og år som er knyttet til deg.',
        recentYears: 'Unngå nylige år.',
        associatedYears: 'Unngå år som er knyttet til deg.',
        sequences: 'Unngå vanlige tegnsekvenser.',
        repeated: 'Unngå gjentatte ord og tegn.',
        longerKeyboardPattern: 'Bruk lengre tastaturmønstre og endre skrivretning flere ganger.',
        anotherWord: 'Legg til flere ord som er mindre vanlige.',
        useWords: 'Bruk flere ord, men unngå vanlige fraser.',
        noNeed: 'Du kan lage sterke passord uten å bruke symboler, tall eller store bokstaver.',
        pwned: 'Hvis du bruker dette passordet andre steder, bør du endre det.',
      },
    },
  },
  dates: {
    previous6Days: "Sist {{ date | weekday('nb-NO','long') }} kl. {{ date | timeString('nb-NO') }}",
    lastDay: "I går kl. {{ date | timeString('nb-NO') }}",
    sameDay: "I dag kl. {{ date | timeString('nb-NO') }}",
    nextDay: "I morgen kl. {{ date | timeString('nb-NO') }}",
    next6Days: "{{ date | weekday('nb-NO','long') }} kl. {{ date | timeString('nb-NO') }}",
    numeric: "{{ date | numeric('nb-NO') }}",
  },
} as const;
