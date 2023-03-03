export default {
  totalPets: state => {
    return state.dogs.length + state.cats.length
  }
}
