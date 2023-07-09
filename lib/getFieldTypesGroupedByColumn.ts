import {databases} from "@/appwrite";

export const getFieldTypesGroupedByColumn = async() => {
    const data = await databases.listDocuments(process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_FIELDTYPES_COLLECTION_ID!);

    const fieldTypes = data.documents;
    const fieldTypesTotalLengthHalf = Number(data.documents.length / 2);

    const columns = fieldTypes.reduce((acc, fieldType, currentIndex) => {
        const filteredObj = {
            $id: fieldType.$id,
            $createdAt: fieldType.$createdAt,
            title: fieldType.TypeName,
            required: fieldType.Required,
        }
        if(currentIndex > fieldTypesTotalLengthHalf) {
            if(!acc.get(1)) {
                acc.set(1, {
                    id: 1,
                    fieldTypes: [],
                });
            }
            acc.get(1)!.fieldTypes.push(filteredObj);
        }else {
            if(!acc.get(0)) {
                acc.set(0, {
                    id: 0,
                    fieldTypes: [],
                });
            }
            acc.get(0)!.fieldTypes.push(filteredObj)
        }
        return acc;

    }, new Map<number, Column>)


    // if all statuses are empty
    const columnTypes: Number[] = [0, 1];

    for(const columnType of columnTypes) {
        if(!columns.get(columnType)) {
            columns.set(columnType, {
                id: columnType,
                fieldTypes: [],
            });
        }
    }

    /*console.log(columns);
    // sort

    const sortedColumns = new Map(
        Array.from(columns.entries()).sort((a, b) =>
            columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
        )
    );*/

    const form: Form = {
        columns
    }

    return form;
}