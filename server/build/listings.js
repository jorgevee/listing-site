"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongodb_1 = require("mongodb");
const database_1 = require("../src/database");
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`[seed] : running...`);
        const db = yield database_1.connectDatabase();
        export const listings = [
            {
                _id: new mongodb_1.ObjectId(),
                title: "Clean and fully furnished apartment. 5 min away from CN Tower",
                image: "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
                address: "3210 Scotchmere Dr W, Toronto, ON, CA",
                price: 10000,
                numOfGuests: 2,
                numOfBeds: 1,
                numOfBaths: 2,
                rating: 5
            }
            // ...
        ];
        for (const listing of listings) {
            yield db.listings.insertOne(listing);
        }
        console.log(`[seed] : success`);
    }
    catch (error) {
        throw new Error("failed to seed database");
    }
});
seed();
