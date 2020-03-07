import { ObjectId } from "mongodb";
import { IResolvers } from "apollo-server-express";
import { Database } from "../lib/types";
import { listings } from "../listings";

export const resolvers: IResolvers = {
  Query: {
    // ...
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ) => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!deleteRes.value) {
        throw new Error("failed to delete listing");
      }

      return deleteRes.value;
    }
  }
};
