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
}

export type RootBottomTabs = {
    Home: {user: User};
    Notes: undefined;
    Account: undefined;
}


export type RootTopTabs = {
    Summary: {user: User};
    Calendar: undefined;
    Savings: undefined;
    Urges: undefined;
}