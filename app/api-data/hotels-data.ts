import { Hotel } from '../classes/hotel';

export const hotels: Hotel[] = [
    new Hotel(1, "Danubius Hotel Regents Park", "United Kingdom", "London", "18 Lodge Road, NW8 7 JT London, GB", 300, [
        'https://media-cdn.tripadvisor.com/media/photo-s/0c/0f/d3/33/lobby.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/05/ed/d0/0c/the-colonnade-london.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/06/7c/13/8d/deluxe-room.jpg']),
    new Hotel(2, "Hilton London Green Park", "United Kingdom", "London", "354 Queenstown Road, SW84AE London, GB",350, [
        'http://fotos.hotelius.com/images/hoteles/500x500/594297_foto7_FACILITIES2.jpg',
        'http://fotos.hotelius.com/images/hoteles/500x500/594297_foto5_ROOM6.jpg',
        'http://fotos.hotelius.com/images/hoteles/500x500/594297_foto2_ROOM2.jpg']),
    new Hotel(3, "Grosvenor House Jw Marriott", "United Kingdom", "London", "150 Bayswater Road, W2 4RT London, GB", 280, [
        'https://s-media-cache-ak0.pinimg.com/originals/00/a9/ec/00a9ec9cb4202aaed5cdaee6ad061c85.jpg',
        'http://www.hotel-r.net/im/hotel/gb/grosvenor-house-a-jw-marriott-hotel-20.jpg',
        'https://i0.bookcdn.com/data/Photos/OriginalPhoto/2486/248664/248664933/Grosvenor-House-A-Jw-Marriott-Hotel-photos-Room.JPEG'])
]