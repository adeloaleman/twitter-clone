import { createConnection } from "typeorm";

import { Users }   from "./src/backend/entities/users";
import { Tweet }   from "./src/backend/entities/tweet";
import { Comment } from "./src/backend/entities/comment";
import { Like }    from "./src/backend/entities/like";

export async function createDbConnection() {
  // SQLite database file (will be created if it doesn't exist)
  const DATABASE_FILE = "twitterclone.sqlite";

  console.log(`
    Using SQLite database file: ${DATABASE_FILE}
  `);

  await createConnection({
    type: "sqlite",
    database: DATABASE_FILE,
    entities: [
      Comment,
      Tweet,
      Users,
      Like
    ],
    synchronize: true
  });
}