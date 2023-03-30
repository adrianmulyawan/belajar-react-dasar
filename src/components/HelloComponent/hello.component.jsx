// > Setiap component dan stylenya kita simpan didalam 1 directory yang sama.
// > Agar mudah nantinya dalam proses maintance data kita
import './hello.component.css';

const HelloComponent = () => {
  return (
    <h1 className="text-red">Hello From Component</h1>
  );
};

export default HelloComponent;