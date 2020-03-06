require("dotenv").config();

import { connectDatabase } from "../src/database";

const seed = async () => {
  try {
    console.log(`[seed] : running...`);

    const db = await connectDatabase();
    export const listings = [
      {
        id: "001",
        title:
          "Clean and fully furnished apartment. 5 min away from CN Tower",
        image:
          "https://res.cloudinary.com/tiny-house/image/upload/v1560641352/mock/Toronto/toronto-listing-1_exv0tf.jpg",
        address: "3210 Scotchmere Dr W, Toronto, ON, CA",
        price: 10000,
        numOfGuests: 2,
        numOfBeds: 1,
        numOfBaths: 2,
        rating: 5
      }
      // ...
    ];
  } catch (error) {
    throw new Error("failed to seed database");
  }
};

seed();
In our seed() function, we want the entire moc
