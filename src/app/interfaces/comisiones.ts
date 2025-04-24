export interface Comisiones {
    _id?: string;
    userId: string;
    office: string;
    periodo: String;
    productosComisionados:[{
        banco: string;
        monto: number;
        factorPorMillon: number;
        comisionGenerada: number;
    }];
    totalComision: number;
    productividadId: string;
    pagada: boolean;
    frecuenciaPago: string;
}

