export default {
  // context.commit
  savePet: ({ commit }, payload) => {
    // console.log(payload)
    const { option } = payload
    if (option === 'create') {
      commit('createPet', payload)
    } else if (option === 'edit') {
      commit('editPet', payload)
    }
  },
  deletePet: ({ commit }, payload) => {
    commit('deletePet', payload)
  }
}
