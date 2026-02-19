export interface Pet {
    id: number;
    name: String;
    description: String;
    imageUrl: String;
}

export interface ApiResponse {
    count: number;
    data: Pet[];
}