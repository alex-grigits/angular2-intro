export class Hotel {
    constructor (
        public id: number,
        public name: string,
        public locationCountry: string,
        public locationCity: string,
        public address: string,
        public price: number,
        public urlImage: string[]
    ){}
}