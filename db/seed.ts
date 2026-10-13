import { config } from "dotenv";
import { db, sql } from "./index";
import { appointmentType } from "./schema/appointmentType";

config({ path: ".env.local" });

async function seed() {
  await db.insert(appointmentType).values({
    name: "Ayurvedic Consultation",
    durationMinutes: 90,
    bufferBeforeMinutes: 0,
    bufferAfterMinutes: 30,
  }).onConflictDoNothing();

  console.log("Seed completed");
}

seed()
  .catch(console.error)
  .finally(()=> sql.end());