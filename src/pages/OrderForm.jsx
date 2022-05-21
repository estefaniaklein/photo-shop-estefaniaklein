// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// function OrderForm() {

//     const [nombre, setNombre] = useState("");
//     const [telefono, setTelefono] = useState("");
//     const [email, setEmail] = useState("");

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`The name you entered was: ${nombre}`)
//     }

//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label>
//                 Nombre: <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
//             </label>
//             <label>
//                 Teléfono: <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
//             </label>
//             <label>
//                 Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <input type="submit" value="Terminar compra" />
//         </form>
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<OrderForm />);

// export default OrderForm;