import { NoteTypes } from "@/types";

export const handleRemovePin = (noteId: string, setNotes: (note: any) => void) => {
    setNotes((prev: NoteTypes[]) => {
        const updated = [...prev]
        const noteIndex = updated.findIndex((u) => u.noteId === noteId);

        if (noteIndex !== -1) {
            updated[noteIndex] = {
                ...updated[noteIndex],
                pinned: !updated[noteIndex].pinned
            };
        }

        return updated;
    })
}