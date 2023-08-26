export interface Data {
    userId: string;
    id: string;
    title: string;
    body: string;
}
export interface Contact {
    id: number;
    firstname: string;
    lastname: string;
    status: string;
}
export interface Country {
    id: number;
    name: string;
    lat: number;
    lng: number;
    activeCases: number;
    recoveredCases: number;
    deaths: number;
}
export interface Covid {
    case: "";
}

export interface FormData {
    firstname: string;
    lastname: string;
    status: string;
}

export interface ErrorForm {
    firstname: boolean;
    lastname: boolean;
    status: boolean;
}
