import { MongoClient } from "mongodb";

const user = "user_001";
const userPassword = "XXXXXX";
const cluster = "cluster0-mbfgp";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true
  });
}; 
