import './Card.css'

/*  Props ou Propriedades, são formas de passar informações de um Componente
    para outro componente através de parâmetros dos Componentes

    Props são os parametros dos Componentes
*/

// Definindo as Props do componente Card através de um interface
interface CardProps {
    titulo: string;
    descricao: string;
}

// Indicamos que o Card recebe as props. titulo, descricao da Interface CardProps
function Card({titulo, descricao}: CardProps) {
    return (
        <div className="card">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Card