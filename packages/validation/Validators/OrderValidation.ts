import { z } from "zod";

export const OrderSchema = z.object({
  // Look into RegEx for validation more
  _id: z.string().regex(/^[0-9a-fA-F]{24}$/),
  user: z.string(),
  orderItems: z.array(
    z.object({
      product: z.object({
        _id: z.string().regex(/^[0-9a-fA-F]{24}$/),
        name: z.string(),
        image: z.string(),
        price: z.number(),
      }),

      qty: z.number(),
    })
  ),
  shippingAddress: z.object({
    address: z.string(),
    city: z.string().refine((city) => city.length > 1),
    postalcode: z.string().refine((postalcode) => postalcode.length === 6),
  }),
  paymentMethod: z.string(),
  paymentResult: z.object({
    id: z.string(),
    status: z.string(),
    update_time: z.string(),
    email_address: z.string(),
  }),
  itemsPrice: z.number(),
  taxPrice: z.number(),
  shippingPrice: z.number(),
  totalPrice: z.number(),
  paidAt: z.string(),
  isDelivered: z.boolean(),
  deliveredAt: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const CreateOrder = OrderSchema.omit({
  _id: true,
  user: true,
  createdAt: true,
  updatedAt: true,
});