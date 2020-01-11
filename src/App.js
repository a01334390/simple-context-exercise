import React from 'react';
/** We make a new context */
const MyContext = React.createContext()

/** Create a provider component */
class MyProvider extends React.Component {
  state = {
    name: 'Wes',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({age: this.state.age + 1})
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div className="family">
    <Person/>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <p> I'm the app </p>
          <Family/>
        </div>
      </MyProvider>
    )
  }
}

class Person extends React.Component {
  render() {
    return (
       <div className="person">
         <MyContext.Consumer>
           {(context) => (
             <React.Fragment>
               <p>I'm inside the {context.state.name}</p>
               <p> Age: {context.state.age} </p>
               <button onClick={context.growAYearOlder}> Happy Birthday! </button> 
             </React.Fragment>
           )}
         </MyContext.Consumer>
       </div>
    )
  }
}
export default App;
