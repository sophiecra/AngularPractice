export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;

}

export const products = [
    {
        id: 1,
        name: "Blush",
        price: 20,
        description: "Coral pink powder blush"

    },
    {
        id: 2,
        name: "Mascara",
        price: 16,
        description: "Jet black volumizing mascara"
    },
    {
        id: 3,
        name: "Concealer",
        price: 15,
        description: "True match creamy concealer"
    }
];