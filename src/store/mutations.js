export default {
  createPet: (state, payload) => {
    const { pet, type } = payload
    // push modifica el mismo array(muta state[type]), concat devuelve uno nuevo(no muta state[type])
    // el anterior ddebte trtarce de mno modificar
    state[type] = state[type].concat([pet])
  },

  editPet: (state, payload) => {
    const { pet, id, type } = payload
    const items = [...state[type]]
    items[id] = pet
    state[type] = items
  },
  deletePet: (state, { id, type }) => {
    const items = [...state[type]]
    items.splice(id, 1)
    state[type] = items
  }
}
