import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div className="p-4">
    <UserButton 
    afterSignOutUrl="/"
    appearance={{
      userProfile: { elements: { breadcrumbs: "bg-slate-500" } },
    }} />
   </div>
  )
}
