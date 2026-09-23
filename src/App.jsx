import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.css'

import Cabecalho from './components/Cabecalho'
import CardModulo from './components/CardModulo'

import Clientes from './pages/Clientes'
import ListaClientes from './pages/ListaClientes'
import CadastroCliente from './pages/CadastroCliente'
import EditarCliente from './pages/EditarCliente'

import Funcionarios from './pages/Funcionarios'
import ListaFuncionarios from './pages/ListaFuncionarios'
import CadastroFuncionario from './pages/CadastroFuncionario'
import EditarFuncionario from './pages/EditarFuncionario'

import Chamados from './pages/chamados'
import ListaChamados from './pages/ListaChamados'
import CadastroChamado from './pages/CadastroChamado'
import EditarChamado from './pages/EditarChamado'

import clientesIniciais from './data/clientes'
import funcionariosIniciais from './data/funcionarios'
import chamadosIniciais from './data/chamados'

function App() {

  const [mostrarModulos, setMostrarModulos] =
    useState(true)

  const [modulos] = useState([
    {
      id: 1,
      titulo: 'Gerenciamento de Produtos',
      descricao: 'Cadastre e consulte os produtos disponíveis.',
    },
    {
      id: 2,
      titulo: 'Gerenciamento de Clientes',
      descricao: 'Cadastre e consulte os clientes da empresa.',
      rota: '/clientes',
    },
    {
      id: 3,
      titulo: 'Gerenciamento de Funcionarios',
      descricao: 'Cadastre e consulte os funcionarios da empresa.',
      rota: '/funcionarios',
    },
    {
      id: 4,
      titulo: 'Gerenciamento de Vendas',
      descricao: 'Registre e consulte as vendas realizadas.',
    },
    {
      id: 5,
      titulo: 'Gerenciamento de Chamados',
      descricao: 'Cadastre e acompanhe chamados de suporte.',
      rota: '/chamados',
    }
  ])

  const [clientes, setClientes] =
    useState(clientesIniciais)

  const [funcionarios, setFuncionarios] =
    useState(funcionariosIniciais)

  const [chamados, setChamados] =
    useState(chamadosIniciais)

  function adicionarCliente(novoCliente) {

    const clienteComId = {
      id: clientes[clientes.length - 1].id + 1,
      ...novoCliente,
    }

    setClientes((listaAtual) => [
      ...listaAtual,
      clienteComId,
    ])
  }

  function excluirCliente(id) {

    setClientes((listaAtual) =>
      listaAtual.filter(
        (cliente) => cliente.id !== id
      )
    )
  }

  function alterarCliente(clienteAtualizado) {

    setClientes((listaAtual) =>
      listaAtual.map((cliente) =>
        cliente.id === clienteAtualizado.id
          ? clienteAtualizado
          : cliente
      )
    )
  }

  function adicionarFuncionario(novoFuncionario) {

    const funcionarioComId = {
      id: funcionarios[funcionarios.length - 1].id + 1,
      ...novoFuncionario,
    }

    setFuncionarios((listaAtual) => [
      ...listaAtual,
      funcionarioComId,
    ])
  }

  function excluirFuncionario(id) {

    setFuncionarios((listaAtual) =>
      listaAtual.filter(
        (funcionario) => funcionario.id !== id
      )
    )
  }

  function alterarFuncionario(funcionarioAtualizado) {

    setFuncionarios((listaAtual) =>
      listaAtual.map((funcionario) =>
        funcionario.id === funcionarioAtualizado.id
          ? funcionarioAtualizado
          : funcionario
      )
    )
  }

  function adicionarChamado(novoChamado) {

    const chamadoComId = {
      id: chamados[chamados.length - 1].id + 1,
      ...novoChamado,
    }

    setChamados((listaAtual) => [
      ...listaAtual,
      chamadoComId,
    ])
  }

  function excluirChamado(id) {

    setChamados((listaAtual) =>
      listaAtual.filter(
        (chamado) => chamado.id !== id
      )
    )
  }

  function alterarChamado(chamadoAtualizado) {

    setChamados((listaAtual) =>
      listaAtual.map((chamado) =>
        chamado.id === chamadoAtualizado.id
          ? chamadoAtualizado
          : chamado
      )
    )
  }

  return (

    <Routes>

      <Route
        path="/"
        element={
          <div className="aplicacao">

            <Cabecalho />

            <main className="conteudo-principal">

              <p>
                Desenvolvido por:
                GUSTAVO HENRIQUE TEIXEIRA SILVA
              </p>

              <p className="introducao">
                Aplicação desenvolvida nas disciplinas de
                Desenvolvimento Web III e Tópicos de Programação II.
              </p>

              <button
                type="button"
                className="botao-alternar"
                onClick={() =>
                  setMostrarModulos(!mostrarModulos)
                }
              >
                {
                  mostrarModulos
                    ? 'Ocultar módulos'
                    : 'Exibir módulos'
                }
              </button>

              {mostrarModulos && (

                <section className="modulos">

                  {modulos.map((modulo) => (

                    <CardModulo
                      key={modulo.id}
                      titulo={modulo.titulo}
                      descricao={modulo.descricao}
                      rota={modulo.rota}
                    />

                  ))}

                </section>

              )}

            </main>

          </div>
        }
      />

      <Route
        path="/clientes"
        element={<Clientes />}
      />

      <Route
        path="/clientes/listar"
        element={
          <ListaClientes
            clientes={clientes}
            aoExcluir={excluirCliente}
          />
        }
      />

      <Route
        path="/clientes/cadastrar"
        element={
          <CadastroCliente
            clientes={clientes}
            aoCadastrar={adicionarCliente}
          />
        }
      />

      <Route
        path="/clientes/editar/:id"
        element={
          <EditarCliente
            clientes={clientes}
            aoAlterar={alterarCliente}
          />
        }
      />

      <Route
        path="/funcionarios"
        element={<Funcionarios />}
      />

      <Route
        path="/funcionarios/listar"
        element={
          <ListaFuncionarios
            funcionarios={funcionarios}
            aoExcluir={excluirFuncionario}
          />
        }
      />

      <Route
        path="/funcionarios/cadastrar"
        element={
          <CadastroFuncionario
            funcionarios={funcionarios}
            aoCadastrar={adicionarFuncionario}
          />
        }
      />

      <Route
        path="/funcionarios/editar/:id"
        element={
          <EditarFuncionario
            funcionarios={funcionarios}
            aoAlterar={alterarFuncionario}
          />
        }
      />

      <Route
        path="/chamados"
        element={<Chamados />}
      />

      <Route
        path="/chamados/listar"
        element={
          <ListaChamados
            chamados={chamados}
            aoExcluir={excluirChamado}
          />
        }
      />

      <Route
        path="/chamados/cadastrar"
        element={
          <CadastroChamado
            aoCadastrar={adicionarChamado}
          />
        }
      />

      <Route
        path="/chamados/editar/:id"
        element={
          <EditarChamado
            chamados={chamados}
            aoAlterar={alterarChamado}
          />
        }
      />

    </Routes>
  )
}

export default App