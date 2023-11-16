import { create } from 'zustand'

const useTask = create((set) => ({
    tasks : [{id: 0, name: "Finish code", deadline: "19/11/2023", nivImp: "important"},
             {id: 1, name: "Eat pizza", deadline: "18/11/2023", nivImp: "neimportant"}],
    addTasks: (name, deadline, nivImp) => set((state) => ({
        tasks : [...state.tasks, {id: state.tasks.length + 1, name: name, deadline: deadline, nivImp: nivImp}]
    })),
    deleteTask: (id) => set((state) => ({
        tasks : state.tasks.filter((task) => task.id != id)
    }))
}))