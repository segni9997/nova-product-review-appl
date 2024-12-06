import { z } from 'zod';

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Product name is required"),
  description: z.string().optional(),
  price: z.string().regex(/^\d+$/, "Price must be a number")
    .transform((val) => parseFloat(val)),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).optional(),
  use: z.string().min(1, "Use type is required"),
  minimumQuantity: z.string().regex(/^\d+$/, "Minimum quantity must be a number")
    .transform((val) => parseInt(val)),
  sellingPrice: z.string().regex(/^\d+$/, "Selling price must be a number")
    .transform((val) => parseFloat(val)),
  addedBy: z.string().min(1, "Added by is required"),
  expiresAt: z.date().transform((val) => val.toISOString())  // Transform Date to ISO string
   ,
  quantityOnHand: z.string().regex(/^\d+$/, "Quantity on hand must be a number")
    .transform((val) => parseInt(val)),
  reservedQuantity: z.string().regex(/^\d+$/, "Reserved quantity must be a number")
    .transform((val) => parseInt(val)),
  discount: z.string().regex(/^\d+$/, "Discount must be a number")
    .transform((val) => parseFloat(val)),
  imageUrls: z
    .array(z.string().url("Image URLs must be valid URLs"))
    .min(1, "At least one image URL is required"),
});
