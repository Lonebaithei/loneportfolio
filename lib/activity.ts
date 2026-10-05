import { db } from "@/lib/db";
import type { Prisma } from "@/generated/prisma/client";

// Spec §38. Keep metadata non-sensitive.
export function logActivity(userId: string, action: string, entityType: string, entityId?: string, metadata?: Prisma.InputJsonValue) {
  return db.activityLog.create({ data: { userId, action, entityType, entityId, metadata } });
}
