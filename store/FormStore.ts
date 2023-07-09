import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import {
    getFieldTypesGroupedByColumn,
    getFieldTypesGroupedByColumnGroupedByColumn
} from "@/lib/getFieldTypesGroupedByColumn";
import {databases} from "@/appwrite";

interface FormState {
    form: Form;
    getForm: () => void;
    setFormState: (form: Form) => void;
    updateCardsInDB: (card: Card, columnId: TypedColumn) => void;
}

export const useFormStore = create<FormState>((set) => ({
    form: {
        columns: new Map<Number, Column>()
    },
    getForm: async () => {
        const form = await getFieldTypesGroupedByColumn();
        set({ form });
    },
    setFormState: (form) => set({form}),
    updateFormsInDB: async(card, columnId) => {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID!,
            process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
            card.$id,
            {
                TypeName: card.title,
                Required: card.required,
                ColumnIndex: card.columnIndex,
            }
        )
    }
}));