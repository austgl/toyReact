import {createElement, Component, render} from './toy-react'
class MyComponent extends Component{
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2
    }
  }
  render() {
    return <div>
      <h1>my component</h1>
      <span>{this.state.a.toString()}</span>
      <span>{this.state.b.toString()}</span>
      <button onclick={() => { this.setState({a: this.state.a + 1});}}>Add</button>
      {this.children}
    </div>
  }
}

render(<MyComponent id="a" class="c">
  <div>abcd</div>
  <div></div>
  <div></div>
</MyComponent>, document.body);
