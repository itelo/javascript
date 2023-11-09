import type { LocalizationResource } from '@clerk/types';

// PT-BR Nomenclature
// Phone Number  = "Telefone" instead of "Celular"
// Email Address = "Endereço de E-mail" instead of "Email"
// Sign-in       = "Fazer login" instead of "Conectar", "Sign-in", "Logar", "Entrar"

const commonTexts = {
  signIn: {
    phoneCode: {
      title: 'Verifique seu telefone',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu telefone',
      resendButton: 'Reenviar código',
    },
  },
} as const;

export const ptBR: LocalizationResource = {
  locale: 'pt-BR',
  socialButtonsBlockButton: 'Continuar com {{provider|titleize}}',
  dividerText: 'ou',
  formFieldLabel__emailAddress: 'Seu e-mail',
  formFieldLabel__emailAddresses: 'Endereços de e-mail',
  formFieldLabel__phoneNumber: 'Telefone',
  formFieldLabel__username: 'Nome de usuário',
  formFieldLabel__emailAddress_username: 'E-mail ou nome de usuário',
  formFieldLabel__password: 'Senha',
  formFieldLabel__currentPassword: 'Senha atual',
  formFieldLabel__newPassword: 'Nova senha',
  formFieldLabel__confirmPassword: 'Confirmar senha',
  formFieldLabel__signOutOfOtherSessions: 'Desconectar de todos os outros dispositivos',
  formFieldLabel__automaticInvitations: 'Ativar convites automáticos para este domínio',
  formFieldLabel__firstName: 'Nome',
  formFieldLabel__lastName: 'Sobrenome',
  formFieldLabel__backupCode: 'Código de backup',
  formFieldLabel__organizationName: 'Nome da organização',
  formFieldLabel__organizationSlug: 'URL Slug',
  formFieldLabel__organizationDomain: 'Domínio',
  formFieldLabel__organizationDomainEmailAddress: 'Endereço de e-mail de verificação',
  formFieldLabel__organizationDomainEmailAddressDescription:
    'Endereço de e-mail para receber um código e verificar este domínio',
  formFieldLabel__organizationDomainDeletePending: 'Excluir convites e sugestões pendentes',
  formFieldLabel__confirmDeletion: 'Confirmar exclusão',
  formFieldLabel__role: 'Função',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses: 'Insira um ou mais endereços de e-mail separados por espaços ou vírgulas',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldInputPlaceholder__organizationDomain: '',
  formFieldInputPlaceholder__organizationDomainEmailAddress: '',
  formFieldAction__forgotPassword: 'Esqueceu a senha?',
  formFieldHintText__optional: 'Opcional',
  formButtonPrimary: 'Continuar',
  signInEnterPasswordTitle: 'Insira sua senha',
  backButton: 'Voltar',
  footerActionLink__useAnotherMethod: 'Utilize outro método',
  badge__primary: 'Principal',
  badge__thisDevice: 'Este dispositivo',
  badge__userDevice: 'Dispositivo do usuário',
  badge__otherImpersonatorDevice: 'Personificar outro dispositivo',
  badge__default: 'Padrão',
  badge__unverified: 'Não verificado',
  badge__requiresAction: 'Requer ação',
  badge__you: 'Você',
  footerPageLink__help: 'Ajuda',
  footerPageLink__privacy: 'Privacidade',
  footerPageLink__terms: 'Termos de uso',
  paginationButton__previous: 'Anterior',
  paginationButton__next: 'Próximo',
  paginationRowText__displaying: 'Exibindo',
  paginationRowText__of: 'de',
  membershipRole__admin: 'Administrador',
  membershipRole__basicMember: 'Membro',
  membershipRole__guestMember: 'Convidado',
  signUp: {
    start: {
      title: 'Criar sua conta',
      subtitle: 'para continuar em {{applicationName}}',
      actionText: 'Possui uma conta?',
      actionLink: 'Entrar',
    },
    emailLink: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Link de verificação',
      formSubtitle: 'Utilize o link enviado no seu e-mail',
      resendButton: 'Reenviar link',
      verified: {
        title: 'Cadastro realizado com sucesso',
      },
      loading: {
        title: 'Conectando...',
      },
      verifiedSwitchTab: {
        title: 'E-mail verificado com sucesso',
        subtitle: 'Retorne para a nova aba que foi aberta para continuar',
        subtitleNewTab: 'Retorne para a aba anterior para continuar',
      },
    },
    emailCode: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu e-mail',
      resendButton: 'Não recebeu o código? Reenviar',
    },
    phoneCode: {
      title: 'Verifique seu telefone',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu telefone',
      resendButton: 'Não recebeu o código? Reenviar',
    },
    continue: {
      title: 'Preencha os campos ausentes',
      subtitle: 'para continuar em {{applicationName}}',
      actionText: 'Possui uma conta?',
      actionLink: 'Entrar',
    },
  },
  signIn: {
    start: {
      title: 'Entrar',
      subtitle: 'para continuar em {{applicationName}}',
      actionText: 'Não possui uma conta?',
      actionLink: 'Registre-se',
      actionLink__use_email: 'Usar e-mail',
      actionLink__use_phone: 'Usar telefone',
      actionLink__use_username: 'Usar nome de usuário',
      actionLink__use_email_username: 'Usar e-mail ou nome de usuário',
    },
    password: {
      title: 'Insira sua senha',
      subtitle: 'para continuar em {{applicationName}}',
      actionLink: 'Utilize outro método',
    },
    forgotPasswordAlternativeMethods: {
      title: 'Esqueceu a senha?',
      label__alternativeMethods: 'Ou, faça login com outro método.',
      blockButton__resetPassword: 'Redefinir sua senha',
    },
    forgotPassword: {
      title_email: 'Verifique seu e-mail',
      title_phone: 'Verifique seu telefone',
      subtitle: 'para redefinir sua senha',
      formTitle: 'Código de redefinição de senha',
      formSubtitle_email: 'Digite o código enviado para o seu endereço de e-mail',
      formSubtitle_phone: 'Digite o código enviado para o seu número de telefone',
      resendButton: 'Não recebeu um código? Reenviar',
    },
    resetPassword: {
      title: 'Redefinir Senha',
      formButtonPrimary: 'Redefinir Senha',
      successMessage: 'Sua senha foi alterada com sucesso. Entrando, por favor aguarde um momento.',
    },
    resetPasswordMfa: {
      detailsLabel: 'Precisamos verificar sua identidade antes de redefinir sua senha.',
    },
    emailCode: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código enviado para seu e-mail',
      resendButton: 'Reenviar código',
    },
    emailLink: {
      title: 'Verifique seu e-mail',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Link de verificação',
      formSubtitle: 'Utilize o link enviado no seu e-mail',
      resendButton: 'Não recebeu um link? Reenviar',
      unusedTab: {
        title: 'Você pode fechar esta aba',
      },
      verified: {
        title: 'Login realizado com sucesso',
        subtitle: 'Você será redirecionado em breve',
      },
      verifiedSwitchTab: {
        subtitle: 'Retorne para a aba original para continuar',
        titleNewTab: 'Conectado em outra aba',
        subtitleNewTab: 'Retorne para a nova aba que foi aberta para continuar',
      },
      loading: {
        title: 'Conectando...',
        subtitle: 'Você será redirecionado em breve',
      },
      failed: {
        title: 'Este link de verificação é inválido',
        subtitle: 'Retorne para a aba original para continuar',
      },
      expired: {
        title: 'Este link de verificação expirou',
        subtitle: 'Retorne para a aba original para continuar',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: 'Verificação em duas etapas',
      subtitle: '',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código gerado pelo seu aplicativo autenticador',
    },
    backupCodeMfa: {
      title: 'Insira um código de backup',
      subtitle: 'para continuar em {{applicationName}}',
      formTitle: 'Código de backup',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: 'Utilize outro método',
      actionLink: 'Ajuda',
      blockButton__emailLink: 'Enviar link para {{identifier}}',
      blockButton__emailCode: 'Enviar código para {{identifier}}',
      blockButton__phoneCode: 'Enviar código para {{identifier}}',
      blockButton__password: 'Fazer login com sua senha',
      blockButton__totp: 'Utilize seu aplicativo autenticador',
      blockButton__backupCode: 'Utilize um código de backup',
      getHelp: {
        title: 'Ajuda',
        content:
          'Se estiver com dificuldades para entrar em sua conta, envie um e-mail para nós que iremos te ajudar a restaurar seu acesso o mais rápido possível.',
        blockButton__emailSupport: 'E-mail de suporte',
      },
    },
    noAvailableMethods: {
      title: 'Não foi possível fazer login',
      subtitle: 'Aconteceu um erro',
      message: 'Não foi possível fazer login. Não há nenhum método de autenticação disponível.',
    },
  },
  userProfile: {
    mobileButton__menu: 'Menu',
    formButtonPrimary__continue: 'Continuar',
    formButtonPrimary__finish: 'Finalizar',
    formButtonReset: 'Cancelar',
    start: {
      headerTitle__account: 'Conta',
      headerTitle__security: 'Segurança',
      headerSubtitle__account: 'Gerencie suas informações de conta',
      headerSubtitle__security: 'Gerencie suas preferencias de segurança',
      profileSection: {
        title: 'Perfil',
      },
      usernameSection: {
        title: 'Nome de usuário',
        primaryButton__changeUsername: 'Trocar nome de usuário',
        primaryButton__setUsername: 'Definir nome de usuário',
      },
      emailAddressesSection: {
        title: 'Endereços de e-mail',
        primaryButton: 'Adicionar um e-mail',
        detailsTitle__primary: 'E-mail principal',
        detailsSubtitle__primary: 'Este é seu e-mail principal',
        detailsAction__primary: 'Completar verificação',
        detailsTitle__nonPrimary: 'Definir como e-mail principal',
        detailsSubtitle__nonPrimary: 'Defina este e-mail como principal para receber as comunicações sobre sua conta',
        detailsAction__nonPrimary: 'Definir como principal',
        detailsTitle__unverified: 'E-mail não verificado',
        detailsSubtitle__unverified: 'Este e-mail não foi verificado e pode ter limitações de funcionalidade',
        detailsAction__unverified: 'Completar verificação',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Você não conseguirá fazer login novamente utilizando este endereço de e-mail',
        destructiveAction: 'Remover e-mail',
      },
      phoneNumbersSection: {
        title: 'Números de telefone',
        primaryButton: 'Adicione um telefone',
        detailsTitle__primary: 'Telefone principal',
        detailsSubtitle__primary: 'Este é o telefone principal',
        detailsAction__primary: 'Completar verificação',
        detailsTitle__nonPrimary: 'Definir como telefone principal',
        detailsSubtitle__nonPrimary:
          'Defina este telefone como o principal para receber as comunicações sobre sua conta',
        detailsAction__nonPrimary: 'Definir como principal',
        detailsTitle__unverified: 'Telefone não verificado',
        detailsSubtitle__unverified: 'Este telefone não foi verificado e pode ter limitações de funcionalidade',
        detailsAction__unverified: 'Completar verificação',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remover este telefone desta conta',
        destructiveAction: 'Remover telefone',
      },
      connectedAccountsSection: {
        title: 'Contas conectadas',
        primaryButton: 'Conectar conta',
        title__connectionFailed: 'Conexão falhou, tente novamente',
        title__reauthorize: 'Reautorização necessária',
        subtitle__reauthorize:
          'Os escopos necessários foram atualizados e você pode estar experimentando funcionalidades limitadas. Por favor, re-autorize este aplicativo para evitar quaisquer problemas.',
        actionLabel__connectionFailed: 'Tentar novamente',
        actionLabel__reauthorize: 'Reautorizar agora',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remover esta conexão da sua conta',
        destructiveActionAccordionSubtitle: 'Remover conexão',
      },
      enterpriseAccountsSection: {
        title: 'Contas corporativas',
      },
      passwordSection: {
        title: 'Senha',
        primaryButton__changePassword: 'Trocar a senha',
        primaryButton__setPassword: 'Defina a senha',
      },
      mfaSection: {
        title: 'Verificação em duas etapas',
        primaryButton: 'Adicione verificação',
        phoneCode: {
          destructiveActionTitle: 'Remover',
          destructiveActionSubtitle: 'Remover este telefone dos métodos de verificação em duas etapas',
          destructiveActionLabel: 'Remover telefone',
          title__default: 'Telefone principal',
          title__setDefault: 'Definir como telefone principal',
          subtitle__default: 'Este telefone será usado como o método de verificação em duas etapas ao fazer login.',
          subtitle__setDefault:
            'Defina este telefone como principal para usá-lo como o método de verificação em duas etapas ao fazer login.',
          actionLabel__setDefault: 'Definir como principal',
        },
        backupCodes: {
          headerTitle: 'Códigos de backup',
          title__regenerate: 'Gerar códigos de backup novamente',
          subtitle__regenerate:
            'Obtenha um novo conjunto de códigos de backup seguros. Os códigos de backup anteriores serão excluídos e não poderão ser usados.',
          actionLabel__regenerate: 'Gerar códigos novamente',
        },
        totp: {
          headerTitle: 'Applicativo autenticador',
          title: 'Fator principal',
          subtitle: 'Este fator será usado como o método de verificação em duas etapas padrão ao fazer login.',
          destructiveActionTitle: 'Remover',
          destructiveActionSubtitle: 'Remover aplicativo autenticador dos métodos de verificação em duas etapas',
          destructiveActionLabel: 'Remover aplicativo autenticador',
        },
      },
      activeDevicesSection: {
        title: 'Dispositivos ativos',
        primaryButton: 'Dispositivos ativos',
        detailsTitle: 'Dispositivo atual',
        detailsSubtitle: 'Este é o dispositivo que você está utilizando agora',
        destructiveActionTitle: 'Sair',
        destructiveActionSubtitle: 'Sair da sua conta neste dispositivo',
        destructiveAction: 'Sair do dispositivo',
      },
      web3WalletsSection: {
        title: 'Carteiras Web3',
        primaryButton: 'Carteiras Web3',
        destructiveActionTitle: 'Remover',
        destructiveActionSubtitle: 'Remover esta carteira Web3 da sua conta',
        destructiveAction: 'Remover carteira',
      },
      dangerSection: {
        title: 'Perigo',
        deleteAccountButton: 'Excluir Conta',
        deleteAccountTitle: 'Excluir Conta',
        deleteAccountDescription: 'Exclua sua conta e todos os dados associados a ela',
      },
    },
    profilePage: {
      title: 'Atualizar perfil',
      imageFormTitle: 'Imagem do perfil',
      imageFormSubtitle: 'Carregar imagem',
      imageFormDestructiveActionSubtitle: 'Remover imagem',
      fileDropAreaTitle: 'Arraste o arquivo aqui ou...',
      fileDropAreaAction: 'Selecione uma imagem',
      fileDropAreaHint: 'Carregue uma imagem JPG, PNG, GIF ou WEBP menor que 10 MB',
      readonly: 'As informações do seu perfil foram fornecidas pela conexão corporativa e não podem ser editadas.',
      successMessage: 'Seu perfil foi atualizado.',
    },
    usernamePage: {
      title: 'Atualizar nome de usuário',
      successMessage: 'Seu nome de usuário foi atualizado.',
    },
    emailAddressPage: {
      title: 'Adicionar e-mail',
      emailCode: {
        formHint: 'Um e-mail contendo um código de verificação será enviado para este endereço de e-mail.',
        formTitle: 'Código de verificação',
        formSubtitle: 'Insira o código de verificação enviado para {{identifier}}',
        resendButton: 'Não recebeu um código? Reenviar',
        successMessage: 'O e-mail {{identifier}} foi adicionado na sua conta.',
      },
      emailLink: {
        formHint: 'Um e-mail contendo um link de verificação será enviado para este endereço de e-mail.',
        formTitle: 'Link de verificação',
        formSubtitle: 'Clique no link de verificação enviado para {{identifier}}',
        resendButton: 'Não recebeu um código? Reenviar',
        successMessage: 'O e-mail {{identifier}} foi adicionado na sua conta.',
      },
      removeResource: {
        title: 'Remover e-mail',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2: 'Você não conseguirá fazer login novamente com este endereço de e-mail.',
        successMessage: '{{emailAddress}} foi removido da sua conta.',
      },
    },
    phoneNumberPage: {
      title: 'Adicionar telefone',
      successMessage: '{{identifier}} foi adicionado na sua conta.',
      infoText: 'Um SMS contendo um link de verificação será enviado para este telefone.',
      infoText__secondary: 'Pode haver cobranças extras para envio de mensagem e dados por SMS.',
      removeResource: {
        title: 'Remover telefone',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2: 'Você não conseguirá fazer login novamente utilizando este número de telefone.',
        successMessage: '{{phoneNumber}} foi removido da sua conta.',
      },
    },
    connectedAccountPage: {
      title: 'Conecte uma conta',
      formHint: 'Selecione um provedor para conectar à sua conta.',
      formHint__noAccounts: 'Não há provedores de conta externos disponíveis.',
      socialButtonsBlockButton: 'Conectar conta {{provider|titleize}}',
      successMessage: 'O provedor foi adicionado à sua conta',
      removeResource: {
        title: 'Remover conta conectada',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2:
          'Você não conseguirá mais usar esta conta e quaisquer recursos dependentes dela deixarão de funcionar.',
        successMessage: '{{connectedAccount}} foi removido da sua conta.',
      },
    },
    web3WalletPage: {
      title: 'Adicionar carteira Web3',
      subtitle__availableWallets: 'Selecione uma carteira Web3 para conectar à sua conta.',
      subtitle__unavailableWallets: 'Não há carteiras Web3 disponíveis.',
      successMessage: 'A carteira foi adicionada à sua conta.',
      removeResource: {
        title: 'Remover carteira Web3',
        messageLine1: '{{identifier}} será removido desta conta.',
        messageLine2: 'Você não poderá mais usar esta carteira Web3 para entrar na sua conta.',
        successMessage: '{{Web3Wallet}} foi removido da sua conta.',
      },
    },
    passwordPage: {
      title: 'Defina a senha',
      changePasswordTitle: 'Trocar senha',
      readonly:
        'Sua senha atualmente não pode ser editada porque você só pode fazer login por meio da conexão da empresa.',
      successMessage: 'Sua senha foi salva.',
      changePasswordSuccessMessage: 'Sua senha foi atualizada.',
      sessionsSignedOutSuccessMessage: 'Todos os outros dispositivos foram desconectados.',
    },
    mfaPage: {
      title: 'Adicione verificação em duas etapas',
      formHint: 'Selecione um método para adicionar.',
    },
    mfaTOTPPage: {
      title: 'Adicionar um aplicativo autenticador',
      verifyTitle: 'Código de verificação',
      verifySubtitle: 'Insira o código de verificação gerado pelo seu aplicativo autenticador',
      successMessage:
        'A verificação em duas etapas está ativa agora. Ao fazer login, você precisará inserir um código de verificação deste aplicativo autenticador como uma etapa adicional.',
      authenticatorApp: {
        infoText__ableToScan:
          'Configure um novo método de login no seu aplicativo autenticador e escaneie o seguinte código QR para vinculá-lo à sua conta.',
        infoText__unableToScan:
          'Configure um novo método de login no seu aplicativo autenticador e insira a chave informada abaixo.',
        inputLabel__unableToScan1:
          "Certifique-se de que o 'One-time passwords' está habilitado, em seguida, conclua a vinculação de sua conta.",
        inputLabel__unableToScan2:
          'Alternativamente, se seu autenticador suportar URIs TOTP, você também pode copiar a URI completa.',
        buttonAbleToScan__nonPrimary: 'Escanear código QR em vez disso',
        buttonUnableToScan__nonPrimary: 'Não pode escanear o código QR?',
      },
      removeResource: {
        title: 'Remover verificação em duas etapas',
        messageLine1:
          'Os códigos de verificação deste aplicativo autenticador não serão mais necessários ao fazer login.',
        messageLine2: 'Sua conta pode ficar menos segura. Tem certeza que deseja continuar?',
        successMessage: 'A verificação em duas etapas via aplicativo autenticador foi removida.',
      },
    },
    mfaPhoneCodePage: {
      title: 'Adicionar verificação por SMS',
      primaryButton__addPhoneNumber: 'Adicione um número de telefone',
      subtitle__availablePhoneNumbers:
        'Selecione um número de telefone para registrar a verificação em duas etapas por código SMS.',
      subtitle__unavailablePhoneNumbers:
        'Não há números de telefone disponíveis para registrar a verificação em duas etapas por código SMS.',
      successMessage:
        'Verificação em duas etapas por código SMS agora está habilitada para este número de telefone. Ao fazer login, você precisará inserir um código de verificação enviado para este número de telefone como uma etapa adicional.',
      removeResource: {
        title: 'Remover verificação em duas etapas',
        messageLine1: '{{identifier}} não receberá mais códigos de verificação ao realizar o login.',
        messageLine2: 'Sua conta pode ficar menos segura. Tem certeza que deseja continuar?',
        successMessage: 'Código SMS de verificação em duas etapas foi removido para {{mfaPhoneCode}}',
      },
    },
    backupCodePage: {
      title: 'Adicionar código de backup para verificação',
      title__codelist: 'Códigos de backup',
      subtitle__codelist: 'Guarde-os em segurança e mantenha-os em sigilo.',
      infoText1: 'Códigos de backup serão ativados para esta conta.',
      infoText2:
        'Guarde-os em segurança e mantenha-os em sigilo. Você pode gerar novos códigos de backup se suspeitar que eles tenham sido comprometidos.',
      successSubtitle:
        'Você pode usar um deles para fazer login na sua conta caso perca o acesso ao seu dispositivo de autenticação.',
      successMessage:
        'Códigos de backup foram ativados para esta conta. Você pode usar um deles para fazer login na sua conta caso perca o acesso ao seu dispositivo de autenticação. Cada código poderá ser utilizado apenas uma vez.',
      actionLabel__copy: 'Copiar tudo',
      actionLabel__copied: 'Copiado!',
      actionLabel__download: 'Download .txt',
      actionLabel__print: 'Imprimir',
    },
    deletePage: {
      title: 'Excluir conta',
      messageLine1: 'Tem certeza de que deseja excluir sua conta?',
      messageLine2: 'Esta ação é permanente e irreversível.',
      actionDescription: 'Digite Excluir conta abaixo para continuar.',
      confirm: 'Excluir conta',
    },
  },
  userButton: {
    action__manageAccount: 'Gerenciar conta',
    action__signOut: 'Sair',
    action__signOutAll: 'Sair de todas as contas',
    action__addAccount: 'Adicionar conta',
  },
  organizationSwitcher: {
    personalWorkspace: 'Conta pessoal',
    notSelected: 'Nenhuma organização selecionada',
    action__createOrganization: 'Criar organização',
    action__manageOrganization: 'Gerenciar organização',
    action__invitationAccept: 'Participar',
    action__suggestionsAccept: 'Solicitar participação',
    suggestionsAcceptedLabel: 'Aprovação pendente',
  },
  impersonationFab: {
    title: 'Logado como {{identifier}}',
    action__signOut: 'Sair',
  },
  organizationProfile: {
    badge__unverified: 'Não verificado',
    badge__automaticInvitation: 'Convites automáticos',
    badge__automaticSuggestion: 'Sugestões automáticas',
    badge__manualInvitation: 'Sem inscrição automática',
    start: {
      headerTitle__members: 'Membros',
      headerTitle__settings: 'Configurações',
      headerSubtitle__members: 'Veja e gerencie os membros da organização',
      headerSubtitle__settings: 'Gerencie as configurações da organização',
    },
    profilePage: {
      title: 'Perfil da organização',
      subtitle: 'Gerencie o perfil da organização',
      successMessage: 'A organização foi atualizada.',
      dangerSection: {
        title: 'Perigo',
        leaveOrganization: {
          title: 'Sair da organização',
          messageLine1:
            'Tem certeza de que deseja sair desta organização? Você perderá o acesso a esta organização e suas aplicações.',
          messageLine2: 'Esta ação é permanente e não pode ser desfeita.',
          successMessage: 'Você saiu da organização.',
          actionDescription: 'Digite {{organizationName}} abaixo para continuar.',
        },
        deleteOrganization: {
          title: 'Excluir organização',
          messageLine1: 'Tem certeza de que deseja excluir esta organização?',
          messageLine2: 'Esta ação é permanente e irreversível.',
          actionDescription: 'Digite {{organizationName}} abaixo para continuar.',
          successMessage: 'Você excluiu a organização.',
        },
      },
      domainSection: {
        title: 'Domínios verificados',
        subtitle:
          'Permita que os usuários se juntem à organização automaticamente ou solicitem participação com base em um domínio de e-mail verificado.',
        primaryButton: 'Adicionar domínio',
        unverifiedDomain_menuAction__verify: 'Verificar domínio',
        unverifiedDomain_menuAction__remove: 'Excluir domínio',
      },
    },
    createDomainPage: {
      title: 'Adicionar domínio',
      subtitle:
        'Adicione o domínio para verificar. Usuários com endereços de e-mail neste domínio podem se juntar à organização automaticamente ou solicitar participação.',
    },
    verifyDomainPage: {
      title: 'Verificar domínio',
      subtitle: 'O domínio {{domainName}} precisa ser verificado por e-mail.',
      subtitleVerificationCodeScreen:
        'Um código de verificação foi enviado para {{emailAddress}}. Insira o código para continuar.',
      formTitle: 'Código de verificação',
      formSubtitle: 'Insira o código de verificação enviado para o seu endereço de e-mail',
      resendButton: 'Não recebeu um código? Reenviar',
    },
    verifiedDomainPage: {
      subtitle: 'O domínio {{domain}} agora está verificado. Continue selecionando o modo de inscrição.',
      start: {
        headerTitle__enrollment: 'Opções de inscrição',
        headerTitle__danger: 'Perigo',
      },
      enrollmentTab: {
        subtitle: 'Escolha como os usuários deste domínio podem se juntar à organização.',
        manualInvitationOption__label: 'Sem inscrição automática',
        manualInvitationOption__description: 'Os usuários só podem ser convidados manualmente para a organização.',
        automaticInvitationOption__label: 'Convites automáticos',
        automaticInvitationOption__description:
          'Os usuários são convidados automaticamente a se juntar à organização quando se inscrevem e podem se juntar a qualquer momento.',
        automaticSuggestionOption__label: 'Sugestões automáticas',
        automaticSuggestionOption__description:
          'Os usuários recebem uma sugestão para solicitar participação, mas devem ser aprovados por um administrador antes de poderem se juntar à organização.',
        formButton__save: 'Salvar',
        calloutInfoLabel: 'Alterar o modo de inscrição afetará apenas os novos usuários.',
        calloutInvitationCountLabel: 'Convites pendentes enviados aos usuários: {{count}}',
        calloutSuggestionCountLabel: 'Sugestões pendentes enviadas aos usuários: {{count}}',
      },
      dangerTab: {
        removeDomainTitle: 'Excluir domínio',
        removeDomainSubtitle: 'Remova este domínio de seus domínios verificados',
        removeDomainActionLabel__remove: 'Excluir domínio',
        calloutInfoLabel: 'A exclusão deste domínio afetará os usuários convidados.',
      },
    },
    invitePage: {
      title: 'Convidar membros',
      subtitle: 'Convidar novos membros para esta organização',
      successMessage: 'Convites enviados com sucesso',
      detailsTitle__inviteFailed: 'Os convites não puderam ser enviados. Corrija o seguinte e tente novamente:',
      formButtonPrimary__continue: 'Enviar convites',
    },
    removeDomainPage: {
      title: 'Excluir domínio',
      messageLine1: 'O domínio de e-mail {{domain}} será removido.',
      messageLine2: 'Os usuários não poderão mais se juntar à organização automaticamente após isso.',
      successMessage: '{{domain}} foi removido.',
    },
    membersPage: {
      detailsTitle__emptyRow: 'Nenhum membro para exibir',
      action__invite: 'Convidar',
      start: {
        headerTitle__active: 'Ativo',
        headerTitle__members: 'Membros',
        headerTitle__invited: 'Convidado',
        headerTitle__invitations: 'Convites',
        headerTitle__requests: 'Solicitações',
      },
      activeMembersTab: {
        tableHeader__user: 'Usuário',
        tableHeader__joined: 'Entrou',
        tableHeader__role: 'Função',
        tableHeader__actions: '',
        menuAction__remove: 'Remover membro',
      },
      invitedMembersTab: {
        tableHeader__invited: 'Convidado',
        menuAction__revoke: 'Cancelar convite',
      },
      invitationsTab: {
        table__emptyRow: 'Nenhum convite para exibir',
        manualInvitations: {
          headerTitle: 'Convites individuais',
          headerSubtitle: 'Convide manualmente membros e gerencie convites existentes.',
        },
        autoInvitations: {
          headerTitle: 'Convites automáticos',
          headerSubtitle:
            'Convide usuários conectando um domínio de e-mail com sua organização. Qualquer pessoa que se inscrever com um domínio de e-mail correspondente poderá se juntar à organização a qualquer momento.',
          primaryButton: 'Gerenciar domínios verificados',
        },
      },
      requestsTab: {
        tableHeader__requested: 'Acesso solicitado',
        menuAction__approve: 'Aprovar',
        menuAction__reject: 'Rejeitar',
        table__emptyRow: 'Nenhuma solicitação para exibir',
        requests: {
          headerTitle: 'Solicitações',
          headerSubtitle: 'Navegue e gerencie usuários que solicitaram participação na organização.',
        },
        autoSuggestions: {
          headerTitle: 'Sugestões automáticas',
          headerSubtitle:
            'Usuários que se inscrevem com um domínio de e-mail correspondente podem ver uma sugestão para solicitar participação em sua organização.',
          primaryButton: 'Gerenciar domínios verificados',
        },
      },
    },
  },
  createOrganization: {
    title: 'Criar organização',
    formButtonSubmit: 'Criar organização',
    subtitle: 'Configure o perfil da organização',
    invitePage: {
      formButtonReset: 'Pular',
    },
  },
  organizationList: {
    createOrganization: 'Criar organização',
    title: 'Selecione uma conta',
    titleWithoutPersonal: 'Selecione uma organização',
    subtitle: 'para continuar no {{applicationName}}',
    action__invitationAccept: 'Participar',
    invitationAcceptedLabel: 'Participando',
    action__suggestionsAccept: 'Solicitar participação',
    suggestionsAcceptedLabel: 'Aprovação pendente',
    action__createOrganization: 'Criar organização',
  },
  unstable__errors: {
    identification_deletion_failed: 'Você não pode excluir sua última identificação.',
    phone_number_exists: 'Este número de telefone já está em uso. Por favor, tente outro.',
    form_identifier_not_found: '',
    captcha_invalid:
      'Não foi possível se inscrever devido a falhas nas validações de segurança. Por favor, atualize a página para tentar novamente ou entre em contato com o suporte para obter mais ajuda.',
    form_password_pwned:
      'Esta senha foi encontrada como parte de uma violação e não pode ser usada, por favor, tente outra senha.',
    form_username_invalid_length: '',
    form_username_invalid_character: '',
    form_param_format_invalid: '',
    form_param_format_invalid__email_address: 'O endereço de e-mail deve ser um endereço de e-mail válido.',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: 'Senha incorreta',
    form_password_not_strong_enough: 'Sua senha não é forte o suficiente.',
    form_password_size_in_bytes_exceeded:
      'Sua senha excedeu o número máximo de bytes permitidos, por favor, encurte-a ou remova alguns caracteres especiais.',
    passwordComplexity: {
      sentencePrefix: 'Sua senha deve conter',
      minimumLength: '{{length}} ou mais caracteres',
      maximumLength: 'menos de {{length}} caracteres',
      requireNumbers: 'um número',
      requireLowercase: 'uma letra minúscula',
      requireUppercase: 'uma letra maiúscula',
      requireSpecialCharacter: 'um caractere especial',
    },
    zxcvbn: {
      notEnough: 'Sua senha não é forte o suficiente.',
      couldBeStronger: 'Sua senha funciona, mas poderia ser mais forte. Tente adicionar mais caracteres.',
      goodPassword: 'Sua senha atende a todos os requisitos necessários.',
      warnings: {
        straightRow: 'Letras que vêm em sequência teclado são fáceis de adivinhar.',
        keyPattern: 'Padrões curtos de teclado são fáceis de adivinhar.',
        simpleRepeat: 'Caracteres repetidos, como "aaa" são fáceis de adivinhar.',
        extendedRepeat: 'Padrões de caracteres repetidos, como "abcabcabc" são fáceis de adivinhar.',
        sequences: 'Sequências comuns de caracteres, como "abc" são fáceis de adivinhar.',
        recentYears: 'Anos recentes são fáceis de adivinhar.',
        dates: 'Datas são fáceis de adivinhar.',
        topTen: 'Esta é uma senha muito usada.',
        topHundred: 'Esta é uma senha usada frequentemente.',
        common: 'Esta é uma senha comumente usada.',
        similarToCommon: 'Esta é semelhante a uma senha comumente usada.',
        wordByItself: 'Palavras simples são fáceis de adivinhar.',
        namesByThemselves: 'Nomes ou sobrenomes são fáceis de adivinhar.',
        commonNames: 'Nomes e sobrenomes comuns são fáceis de adivinhar.',
        userInputs: 'Não deve haver nenhum dado pessoal ou relacionado à página.',
        pwned: 'Sua senha foi exposta por uma violação de dados na Internet.',
      },
      suggestions: {
        l33t: "Evite substituições previsíveis de letras, como '@' por 'a'.",
        reverseWords: 'Evite utilizar palavras comuns escritas de "trás para frente".',
        allUppercase: 'Utilize apenas algumas letras maiúsculas, não todas.',
        capitalization: 'Utilize outras letras maiúsculas, além do que primeira.',
        dates: 'Evite datas e anos associados a você.',
        recentYears: 'Evite anos recentes.',
        associatedYears: 'Evite anos associados a você.',
        sequences: 'Evite sequências comuns de caracteres.',
        repeated: 'Evite palavras e caracteres repetidos.',
        longerKeyboardPattern: 'Use padrões de teclado mais longos e mude a direção da digitação várias vezes.',
        anotherWord: 'Adicione mais palavras que são menos comuns.',
        useWords: 'Use várias palavras, mas evite frases comuns.',
        noNeed: 'Você pode criar senhas fortes sem usar símbolos, números ou letras maiúsculas.',
        pwned: 'Se você usar esta senha em outro lugar, você deve mudá-la.',
      },
    },
    form_param_max_length_exceeded__name: 'O nome não deve exceder 256 caracteres.',
    form_param_max_length_exceeded__first_name: 'O primeiro nome não deve exceder 256 caracteres.',
    form_param_max_length_exceeded__last_name: 'O sobrenome não deve exceder 256 caracteres.',
  },
  dates: {
    previous6Days: "Último {{ date | weekday('pt-BR','long') }} às {{ date | timeString('pt-BR') }}",
    lastDay: "Ontem às {{ date | timeString('pt-BR') }}",
    sameDay: "Hoje às {{ date | timeString('pt-BR') }}",
    nextDay: "Amanhã às {{ date | timeString('pt-BR') }}",
    next6Days: "{{ date | weekday('pt-BR','long') }} às {{ date | timeString('pt-BR') }}",
    numeric: "{{ date | numeric('pt-BR') }}",
  },
} as const;
