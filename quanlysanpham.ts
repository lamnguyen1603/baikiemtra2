import {SanPhAm} from "./sanpham";

export class QuanLySanPhAm {
    listSanPhAm: SanPhAm[] = [];

    add(sAnPhAm: SanPhAm): void {
        this.listSanPhAm.push(sAnPhAm);
    }

    disPlay(): void {
        for (const quanLySp of this.listSanPhAm) {
            console.log(quanLySp);
        }
    }
    editSanPhAm(id: number,sanPhAmEdit : SanPhAm): void {
        for (let i = 0;i<this.listSanPhAm.length;i++) {
            if(this.listSanPhAm[i].id ===id ) {
                this.listSanPhAm[i] =sanPhAmEdit;
            }
        }

    }

    remove(id: number): void {
        for (let i = 0; i < this.listSanPhAm.length; i++) {
            if (this.listSanPhAm[i].id === id) {
                this.listSanPhAm.splice(i, 1)
            }
        }
    }
    searchKhoAngGia(a : number,b :number) {
        let result = this.listSanPhAm.filter(sAnPhAm => a <= sAnPhAm.gia && sAnPhAm.gia <= b );
        return result;
    }
    giaTangDan(){
        return this.listSanPhAm.sort(function (a, b) {
            return a.gia - b.gia;
        });
    }
    giaGiAmDan(){
        return this.listSanPhAm.sort(function (a, b) {
            return  b.gia - a.gia;
        });
    }
    soLuOngGiAmDan() {
        return this.listSanPhAm.sort(function (a, b) {
            return  b.soLuOng - a.soLuOng;
        });
    }
    searchTheoHang(tenHang : string) {
        let list = [];
        for(let i = 0 ; i < this.listSanPhAm.length;i++) {
            if(this.listSanPhAm[i].hang === tenHang) {
                list.push(this.listSanPhAm[i])
            }
        }return list;
    }



}

