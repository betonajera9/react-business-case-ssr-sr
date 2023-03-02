export interface Character {
    id: string
    name: string
    image: string
    status: string
    species: string
    location: {
        name: string
    },
    origin: {
        name: string
    }
}