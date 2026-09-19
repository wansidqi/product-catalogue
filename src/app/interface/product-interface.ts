export interface ProductInterface {
    id: string
    title: string
    description: string
    category: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    tags: string[]
    brand: string
    sku: string
    weight: number
    dimensions: Dimensions
    warrantyInformation: string
    shippingInformation: string
    availabilityStatus: string
    reviews: Reviews[]
    returnPolicy: string
    minimumOrderQuantity: number
    meta: Meta
    images: string[]
    thumbnail: string
}

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Reviews {
    rating: string
    comment: string
    date: Date
    reviewerName: Date
    reviewerEmail: Date
}

interface Meta {
    createdAt: Date
    updatedAt: Date
    barcode: string
    qrCode: string
}