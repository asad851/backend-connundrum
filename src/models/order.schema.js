import mongoose from "mongoose"
import DeliveryStatus from "../utils/DeliveryStatus.js"


const orderSchema = new mongoose.Schema({
    product: {
        type: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                },
                count: Number,
                price: Number
            }
        ],
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    coupon: String,
    transactionId: String,
    status: {
        type: String,
        enum: Object.values(DeliveryStatus),
        //TODO: try better way
        default: "ORDERED"
    }
}, {timestamps: true})


export default mongoose.model("Order", orderSchema)