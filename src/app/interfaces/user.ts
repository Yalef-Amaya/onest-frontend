import { Cargo } from "./cargos";

export interface User {
    _id?: string;
    typeDoc: string;
    nDoc: string;
    name?: string;
    username: string;
    celular?: string;
    password?: string;
    cargo: Cargo;
    office?: string;
}