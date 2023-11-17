import { create } from 'zustand'

export const useTask = create((set) => ({
    tasks : [{id: 0, name: "Finish code", deadline: "19/11/2023", importance: "important"},
             {id: 1, name: "Eat pizza", deadline: "18/11/2023", importance: "neimportant"}],
    addTasks: (name, deadline, importance) => set((state) => ({
        tasks : [...state.tasks, {id: state.tasks.length, name: name, deadline: deadline, importance: importance}]
    })),
    deleteTask: (index) => set((state) => ({
        tasks : state.tasks.filter((task) => {return task.id != index})
    }))
}))