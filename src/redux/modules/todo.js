const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

let nextId = 1;
export const add_todo = (titleValue, bodyValue) => {
    return {
        type: ADD_TODO,
        post: {
            id: nextId++,
            title: titleValue,
            body: bodyValue,
            isDone: false
        }
    }
}

export const delete_todo = (payload) => {
    return {
        type: DELETE_TODO,
        payload,
    }
}

export const toggle_todo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload,
    }
}


const initialState = {
    todos: [
        {
            id: 0,
            title: "아침먹기",
            body: "라면말고 꼭 밥먹기",
            isDone: false
        }
    ],
};

const todo = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.post]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((item) => {
                    if (item.id === action.payload) {
                        return {
                            ...item,
                            isDone: !item.isDone,
                        };
                    } else {
                        return { ...item };
                    }

                })
            };

        default:
            return state;
    }
};
export default todo;