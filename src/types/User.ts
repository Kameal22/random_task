export type Company = {
    name: string
}

export type User = {
    company: Company;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}