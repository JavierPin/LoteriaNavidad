import { Timestamp } from "rxjs/internal/types";

export interface BusquedaNumero{
    numero: number,
    premio: number,
    timestamp?: number,
    status?: number,
    error?: number
}