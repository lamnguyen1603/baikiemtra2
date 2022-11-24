export class SanPhAm {
     _id! :number
    _ten! : string ;
     _gia! : number;
     _soLuOng! : number;
     _hang! : string;

    constructor(id: number, ten: string, gia: number, soLuOng: number, hang: string) {
        this._id = id;
        this._ten = ten;
        this._gia = gia;
        this._soLuOng = soLuOng;
        this._hang = hang;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get ten(): string {
        return this._ten;
    }

    set ten(value: string) {
        this._ten = value;
    }

    get gia(): number {
        return this._gia;
    }

    set gia(value: number) {
        this._gia = value;
    }

    get soLuOng(): number {
        return this._soLuOng;
    }

    set soLuOng(value: number) {
        this._soLuOng = value;
    }

    get hang(): string {
        return this._hang;
    }

    set hang(value: string) {
        this._hang = value;
    }
}