import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }) });

async function main() {
  const email = process.env.ADMIN_EMAIL?.toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (!email || !password || password.length < 12)
    throw new Error("Set ADMIN_EMAIL and an ADMIN_PASSWORD of 12+ characters in .env");

  await db.user.upsert({
    where: { email },
    update: { passwordHash: await bcrypt.hash(password, 12) },
    create: { email, name: "Lone Baithei", passwordHash: await bcrypt.hash(password, 12) },
  });
  // Minimal real content only; everything else is entered through the admin (Rule 3, Rule 5).
  if (!(await db.profile.findFirst()))
    await db.profile.create({ data: { name: "Lone Baithei", headline: "Business Intelligence · Data Analytics · Data Engineering · Quantitative Finance" } });
  await db.siteSettings.upsert({ where: { id: "singleton" }, update: {}, create: {} });
  console.log("Seed complete.");
}
main().finally(() => db.$disconnect());
