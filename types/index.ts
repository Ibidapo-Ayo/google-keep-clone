export type NoteTypes = {
    title: string; 
    text: string; 
    reminder: string; 
    collaborator: never[]; 
    bgColor: string; 
    images: never[]; 
    archive: boolean; 
    pinned: boolean; 
    isAList: boolean; 
    listValue: { text: string; completed: boolean; }[];
}