import { Link } from 'react-router'

function Chamados() {
  return (
    <div className="pagina-clientes">

      <p>
        Desenvolvido por: GUSTAVO HENRIQUE TEIXEIRA SILVA
      </p>

      <h1>Gerenciamento de Chamados</h1>

      <p>Escolha uma das opções:</p>

      <div className="opcoes-clientes">

        <Link to="/chamados/listar">
          Listar chamados
        </Link>

        <Link to="/chamados/cadastrar">
          Cadastrar novo chamado
        </Link>

      </div>

      <Link to="/">
        Voltar para a página inicial
      </Link>

    </div>
  )
}

export default Chamados