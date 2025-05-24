import { PrismaClient } from "@prisma/client";

//create client
const database = new PrismaClient();

//export as strictly typed
export default database as PrismaClient;