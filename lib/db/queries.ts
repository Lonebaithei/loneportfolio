import { db } from "@/lib/db";

// Public queries use explicit `select` so private fields (privateNotes,
// nextAction, priority, targetDate) can never leak. Spec §20, Rule 4.
const publicProjectSelect = {
  id: true, title: true, slug: true, shortDescription: true, category: true,
  status: true, progress: true, technologies: true, featured: true,
  coverImage: true, updatedAt: true, repositoryUrl: true, demoUrl: true,
  documentationUrl: true,
} as const;

const livePublic = { public: true, publishStatus: "PUBLISHED" as const };

export const getProfile = () => db.profile.findFirst();

export const getNow = () =>
  db.nowEntry.findFirst({ where: { isCurrent: true }, orderBy: { updatedAt: "desc" } });

export const getFeaturedProjects = (take = 6) =>
  db.project.findMany({
    where: { ...livePublic, featured: true },
    select: publicProjectSelect, orderBy: { updatedAt: "desc" }, take,
  });

export const getPublicProjects = () =>
  db.project.findMany({
    where: livePublic, select: publicProjectSelect, orderBy: { updatedAt: "desc" },
  });

export const getPublicProject = (slug: string) =>
  db.project.findFirst({
    where: { slug, ...livePublic },
    select: {
      ...publicProjectSelect, longDescription: true, problem: true, objectives: true,
      approach: true, outcomes: true, lessons: true, architectureImg: true,
      milestones: { select: { id: true, title: true, status: true }, orderBy: { sortOrder: "asc" } },
      skills: { select: { name: true } },
    },
  });

export const getCvData = async () => {
  const [profile, education, certifications, experience, skills, resume] = await Promise.all([
    db.profile.findFirst(),
    db.education.findMany({ where: { public: true }, orderBy: { sortOrder: "asc" } }),
    db.certification.findMany({ where: { public: true }, orderBy: { sortOrder: "asc" } }),
    db.experience.findMany({ where: { public: true }, orderBy: { sortOrder: "asc" } }),
    db.skill.findMany({ where: { public: true }, orderBy: { sortOrder: "asc" }, include: { projects: { where: livePublic, select: { slug: true, title: true } } } }),
    db.resume.findFirst({ where: { status: "CURRENT" } }),
  ]);
  return { profile, education, certifications, experience, skills, resume };
};
