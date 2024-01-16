import { useState } from 'react'
import './Contador.css'

/*  Hooks são funcionais especiais que o React disponibiliza para nós 
    termos melhor controle de algumas ações que ocorrem em nosso projeto.

    useState: cria uma variavel de Estado, conectada ao Componente, sempre 
    que ela mudar o seu valor, o Componente renderiza novamente mostrando
    aquele novo valor.
*/

function Contador() {
  // useState = cria uma variavel de estado
  const [numero, setNumero] = useState(0)

  function somarMaisUm(){
    setNumero(numero + 1)
  }

  return (
    <div className="container">
        <p>O valor é: { numero }</p>
        <button onClick={somarMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador