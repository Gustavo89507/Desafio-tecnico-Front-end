import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

function EditarChamado({ chamados, aoAlterar }) {

  const { id } = useParams()

  const navigate = useNavigate()

  const chamadoEncontrado = chamados.find(
    (chamado) => chamado.id === Number(id)
  )

  const [titulo, setTitulo] =
    useState(chamadoEncontrado?.titulo ?? '')

  const [descricao, setDescricao] =
    useState(chamadoEncontrado?.descricao ?? '')

  const [prioridade, setPrioridade] =
    useState(chamadoEncontrado?.prioridade ?? '')

  const [solicitante, setSolicitante] =
    useState(chamadoEncontrado?.solicitante ?? '')

  const [status, setStatus] =
    useState(chamadoEncontrado?.status ?? '')

  function alterarChamado(evento) {

    evento.preventDefault()

    const chamadoAtualizado = {

      id: Number(id),

      titulo,

      descricao,

      prioridade,

      solicitante,

      status,

    }

    aoAlterar(chamadoAtualizado)

    alert('Chamado alterado com sucesso!')

    navigate('/chamados/listar')

  }

  if (!chamadoEncontrado) {

    return (

      <main className="pagina-clientes">

        <h1>Chamado não encontrado</h1>

        <Link to="/chamados/listar">
          Voltar para lista de chamados
        </Link>

      </main>

    )

  }

  return (

    <main className="pagina-clientes">

      <p>
        Desenvolvido por: GUSTAVO HENRIQUE TEIXEIRA SILVA
      </p>

      <h1>Alterar Chamado</h1>

      <form
        className="formulario-cliente"
        onSubmit={alterarChamado}
      >

        <label htmlFor="titulo">
          Título
        </label>

        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(evento) =>
            setTitulo(evento.target.value)
          }
          required
        />

        <label htmlFor="descricao">
          Descrição
        </label>

        <input
          id="descricao"
          type="text"
          value={descricao}
          onChange={(evento) =>
            setDescricao(evento.target.value)
          }
          required
        />

        <label htmlFor="prioridade">
          Prioridade
        </label>

        <input
          id="prioridade"
          type="text"
          value={prioridade}
          onChange={(evento) =>
            setPrioridade(evento.target.value)
          }
          required
        />

        <label htmlFor="solicitante">
          Solicitante
        </label>

        <input
          id="solicitante"
          type="text"
          value={solicitante}
          onChange={(evento) =>
            setSolicitante(evento.target.value)
          }
          required
        />

        <label htmlFor="status">
          Status
        </label>

        <input
          id="status"
          type="text"
          value={status}
          onChange={(evento) =>
            setStatus(evento.target.value)
          }
          required
        />

        <button type="submit">
          Salvar alterações
        </button>

      </form>

      <Link to="/chamados/listar">
        Voltar para lista de chamados
      </Link>

    </main>

  )
}

export default EditarChamado