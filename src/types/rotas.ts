import { User } from "./User";


export type RootStack = {
    FirstScreen: undefined;
    CadastroScreen: undefined;
    LoginScreen: undefined;
    IntroScreen: {user: User};
    Question1Screen: {user: User};
    Question2Screen: {user: User};
    Question3Screen: {user: User};
    Question4Screen: {user: User};
    Question5Screen: {user: User};
    AutorizacaoScreen: {user: User};
    ReadyScreen: {user: User};
    BottomT: {user: User};
    CheckinScreen: undefined;
    ImpulsoScreen: undefined;
}

export type RootBottomTabs = {
    Home: {user: User};
    Notes: undefined;
    Account: undefined;
}


export type RootTopTabs = {
    Resumo: {user: User};
    Calendário: undefined;
    Economias: undefined;
    Impulsos: undefined;
}