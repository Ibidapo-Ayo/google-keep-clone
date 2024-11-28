export type NoteTypes = {
    noteId: string,
    title: string; 
    text: string; 
    reminder: string; 
    collaborator: never[]; 
    bgColor: string; 
    images: never[]; 
    archive: boolean; 
    pinned: boolean; 
    isAList: boolean; 
    listValue: listValueTypes[];
}

export type listValueTypes = { text: string; completed: boolean; }