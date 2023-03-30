// > Stateless Component
// => Biasa disebut juga dengan function component.
// => Kenapa dikataka stateless component? karena fungsi ini hanya menerima sebuah inputan, biasanya functional component ini digunakan untuk membungkus component kecil lainnya seperti component table, button, dll.
// => Weh.. tapi tunggu dulu sekarang kita bisaloh membuat statefull component menggunakan function component.
const HelloComponent = () => {
  return (
    <h1>Hello From Stateless Component!</h1>
  );
};

export default HelloComponent;