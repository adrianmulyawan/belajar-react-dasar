import React from 'react';

// > Statefull Component
// => Statefull component biasa disebut juga dengan class component.
// => Statefull component digunakan untuk membungkus kode dari stateless component dengan cakupan yang lebih banyak dan besar
class ClassStatefullComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Ini adalah statefull component</h1>
      </>
    )
  }
}

export default ClassStatefullComponent