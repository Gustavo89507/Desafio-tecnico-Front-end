import { Link } from 'react-router'

function ListaChamados({ chamados, aoExcluir }) {

  function confirmarExclusao(chamado) {

    const confirmacao = window.confirm(
      `Deseja realmente excluir o chamado ${chamado.titulo}?`
    )

    if (confirmacao) {
      aoExcluir(chamado.id)
    }

  }

  return (

    <main className="pagina-clientes">

      <p>
        Desenvolvido por: GUSTAVO HENRIQUE TEIXEIRA SILVA
      </p>

      <h1>Lista de Chamados</h1>

      <ul className="lista-clientes">

        {chamados.map((chamado) => (

          <li key={chamado.id}>

            <strong>
              {chamado.titulo}
            </strong>

            <span>
              ID: {chamado.id}
            </span>

            <span>
              Descrição: {chamado.descricao}
            </span>

            <span>
              Prioridade: {chamado.prioridade}
            </span>

            <span>
              Solicitante: {chamado.solicitante}
            </span>

            <span>
              Status: {chamado.status}
            </span>

            <div className="acoes-cliente">

              <Link
                to={`/chamados/editar/${chamado.id}`}
                className="botao-alterar"
              >
                Alterar
              </Link>

              <button
                type="button"
                className="botao-excluir"
                onClick={() => confirmarExclusao(chamado)}
              >
                Excluir
              </button>

            </div>

          </li>

        ))}

      </ul>

      <Link to="/chamados">
        Voltar para Gerenciamento de Chamados
      </Link>

    </main>

  )
}

export default ListaChamados