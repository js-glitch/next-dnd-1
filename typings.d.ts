interface Form {
    columns: Map<number, Column>,
}


interface Column {
    id: number,
    fieldTypes: Card[]
}

interface Card {
    $id: string,
    $createdAt: string,
    title: string,
    required?: boolean,
    columnIndex?: number,
}

// interface Image {
//     bucketId: string,
//     fileId: string,
// }