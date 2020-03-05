require("dotenv").config();

const seed = async () => {
  try {
    console.log(`[seed] : running...`);
  } catch (error) {
    throw new Error("failed to seed database");
  }
};

seed();
