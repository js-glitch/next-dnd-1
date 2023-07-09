'use client'

import React from 'react'

type Props = {
    type: Card;
    index: number;
    id: TypedColumn;
    innerRef: (element: HTMLElement | null ) => void,
    draggableProps: DraggableProvidedDraggableProps,
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}


export default function Card({
                                     card,
                                     index,
                                     id,
                                     innerRef,
                                     draggableProps,
                                     dragHandleProps
                                 } : Props) {
    return (
        <div
            className="bg-white rounded-md space-y-2 drop-shadow-md"
            {...draggableProps}
            {...dragHandleProps}
            ref={innerRef}
        >
            <div className="flex justify-between items-center p-5">
                <p>{card.title}</p>
                {/*<button className="text-red-500 hover:text-red-600">*/}
                {/*    {"X"}*/}
                {/*    /!*<XCircleIcon className="ml-5 h-8 w-8" />*!/*/}
                {/*</button>*/}
            </div>
        </div>


    )
}
