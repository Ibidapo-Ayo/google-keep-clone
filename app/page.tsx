import AddNotes from "@/components/AddNotes";
import ShowNotes from "@/components/notes/ShowNotes";

export default function Home() {
  return (
    <div className="w-full space-y-10 pt-10">
      <AddNotes />
      <ShowNotes />
    </div>
  );
}
