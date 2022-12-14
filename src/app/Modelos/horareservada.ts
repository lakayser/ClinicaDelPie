export interface HoraReservadas {
    _id:        string;
    nombre:     null | string;
    rut:        null | string;
    numero:     null | string;
    horaTomada: HoraTomada[];
    estado?:    boolean;
}

export interface HoraTomada {
    _id:            string;
    fecha:          Date;
    dia:            string;
    hora:           string;
    disponibilidad: boolean;
    semana:         number;
    estado:         boolean;
    createdAt:      Date;
    updatedAt:      Date;
}
