export type NoteTypes = {
    noteId: string,
    title: string;
    text: string;
    reminder: string;
    collaborator: CollaboratorTypes[];
    bgColor: string;
    images: never[];
    archive: boolean;
    pinned: boolean;
    isAList: boolean;
    listValue: listValueTypes[];
    color?: string
}

export type listValueTypes = { text: string; completed: boolean; }

export type CollaboratorTypes = {
    id: string,
    image?: string,
    email: string
}
