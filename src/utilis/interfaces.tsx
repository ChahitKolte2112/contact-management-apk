export interface Data {
    userId: string;
    id: string;
    title: string;
    body: string;
}
export interface Contact {
    firstname: string;
    lastname: string;
    status: string;
}

export interface FormData {
    email: string;
    name: string;
    mobilenumber: string;
}

export interface ErrorForm {
    firstname: boolean;
    lastname: boolean;
    status: boolean;
}
