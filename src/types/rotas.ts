import { User } from "./User";


export type RootStack = {
    FirstScreen: undefined;
    CadastroScreen: undefined;
    LoginScreen: { user: User };
    IntroScreen: undefined;
    Question1Screen: undefined;
    Question2Screen: undefined;
    Question3Screen: undefined;
    Question4Screen: undefined;
    Question5Screen: undefined;
    ReadyScreen: undefined;
    BottomT: undefined;
}

export type RootBottomTabs = {
    Home: undefined;
    Progress: undefined;
    Notes: undefined;
    Account: undefined;
}


export type RootTopTabs = {
    Summary: undefined;
    Calendar: undefined;
    Savings: undefined;
    Urges: undefined;
}