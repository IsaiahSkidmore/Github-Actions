// import models from '../models/index.js';
// import db from '../config/connection.js';
// export default async (modelName: "Question", collectionName: string) => {
//   try {
//     let modelExists = [];
//     if (models[modelName] && models[modelName].db) {
//       if (models[modelName]?.db?.db) {
//         modelExists = await models[modelName].db.db.listCollections({
//           name: collectionName
//         }).toArray();
//       }
//     }
//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        let modelExists = [];
        const modelDb = models[modelName]?.db?.db;
        if (modelDb) {
            modelExists = await modelDb.listCollections({
                name: collectionName
            }).toArray();
        }
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
