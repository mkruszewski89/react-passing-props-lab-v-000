import React, {Component} from 'react'
import FruitBasket from './FruitBasket'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentFilter: null,
      filters: [],
      fruit: []
    }
  }

  componentDidMount() {
    this.fetchFilters()
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(res => response.json())
      .then(json => this.setState({filters}))
  }

  updateFilter = event => {
    console.log('update filter to: ', event.target.value)
    this.setState({currentFilter: event.target.value})
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        onUpdateFilter={this.updateFilter}
      />
    )
  }

}

export default App
