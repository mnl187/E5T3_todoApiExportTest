export interface SingleTodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}


export type SingleTodoCreate = Omit<SingleTodo, 'id'>;