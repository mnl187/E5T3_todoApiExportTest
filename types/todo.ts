interface SingleTodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}


type SingleTodoCreate = Omit<SingleTodo, 'id'>;