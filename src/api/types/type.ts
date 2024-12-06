export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    use: string;
    minimumQuantity: number;
    sellingPrice: number;
    addedBy: string;
    expiresAt: string;
    quantityOnHand: number;
    reservedQuantity: number;
    discount: string;
    imageUrls: string[];
    createdAt: string;
    updatedAt: string;
  };
  
export type Productlist = Product[]


export type Reviews = {
    id: string;
    productId: string;
    reviewerName: string;
    rating: number;
    comment: string;
}
export type ReviewList = Reviews[]