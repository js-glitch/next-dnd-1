import {Draggable, Droppable} from 'react-beautiful-dnd';
import React from 'react'
import Card from "@/components/Card";

type Props = {
    id: number,
    cards: Card[],
    index: number,
};


export default function Column({id, cards, index}: Props) {
    return (
    <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps}
                     {...provided.dragHandleProps}
                     ref={provided.innerRef}>
                    {/* render droppable cards in the column */}
                    <Droppable droppableId={index.toString()} type="card">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`p-2 rounded-2xl shadow-sm ${snapshot.isDraggingOver
                                    ? 'bg-green-200': 'bg-white/50'}`}
                            >
                                {/*<h2 className="flex justify-between font-bold text-xl p-2">*/}
                                {/*    <span className="text-grey-500 bg-gray-200 rounded-full px-2 py-2 text-sm">{cards.length}</span>*/}
                                {/*</h2>*/}

                                <div className="space-y-2">
                                    {cards.map((card, index) => (
                                        <Draggable
                                            key={card.$id}
                                            draggableId={card.$id}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <Card
                                                    card={card}
                                                    index={index}
                                                    id={id}
                                                    innerRef={provided.innerRef}
                                                    draggableProps={provided.draggableProps}
                                                    dragHandleProps={provided.dragHandleProps}
                                                />
                                            )}
                                        </Draggable>
                                    ))}

                                    {provided.placeholder}

                                    {/*<div className="flex items-end justify-end p-2">*/}
                                    {/*    <button className="text-green-500 hover:text-green-600">*/}
                                    {/*        {'+'}*/}
                                    {/*        /!*<PlusCircleIcon className="h-10 w-10" />*!/*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}
