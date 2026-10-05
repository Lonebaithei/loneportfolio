import { getProfile } from "@/lib/db/queries";
export const dynamic = "force-dynamic";
export const metadata = { title: "About" };

export default async function About() {
  const profile = await getProfile();
  return (
    <>
      <h1 className="text-2xl font-semibold">About</h1>
      <p className="mt-4 max-w-2xl whitespace-pre-line">{profile?.about ?? "Nothing here yet."}</p>
    </>
  );
}
