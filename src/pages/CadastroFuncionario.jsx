import { useState } from 'react'
import { Link } from 'react-router'
function CadastroFuncionario({ aoCadastrar, funcionarios }) {
 const [nome, setNome] = useState('')
 const [cnpj, setCnpj] = useState('')
 const [email, setEmail] = useState('')
 const [telefone, setTelefone] = useState('')
 const [erros, setErros] = useState({})
const [mensagemSucesso, setMensagemSucesso] = useState('')

 function limparErro(campo) {
 setErros((errosAtuais) => ({
 ...errosAtuais,
 [campo]: '',
 }))
 setMensagemSucesso('')
}
  function validarFormulario() {
 const novosErros = {}
 const nomeTratado = nome.trim()
 const emailTratado = email.trim()
 if (nomeTratado.length < 5) {
 novosErros.nome =
 'O nome deve possuir no mínimo 5 caracteres.'
 }
 if (!/^\d{14}$/.test(cnpj)) {
 novosErros.cnpj =
 'O CNPJ deve possuir exatamente 14 números.'
 }
 const cnpjDuplicado = funcionarios.some(
 (Funcionario) => Funcionario.cnpj === cnpj
)
if (cnpjDuplicado) {
 novosErros.cnpj =
 'Já existe um funcionario cadastrado com este CNPJ.'
}
 if (!/^\(\d{2}\)9\d{4}-\d{4}$/.test(telefone)) {
 novosErros.telefone =
 'Informe o telefone no formato (DDD)9XXXX-XXXX.'
 }
 if (
 !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTratado)
 ) {
 novosErros.email =
 'Informe um endereço de e-mail válido.'
 }
 const emailDuplicado = funcionarios.some(
 (funcionario) =>
 funcionario.email.toLowerCase() ===
 emailTratado.toLowerCase()
)
if (emailDuplicado) {
 novosErros.email =
 'Já existe um funcionario cadastrado com este e-mail.'
}

 setErros(novosErros)
 return Object.keys(novosErros).length === 0
}
function cadastrarFuncionario(evento) {
 evento.preventDefault()
 setMensagemSucesso('')
 if (!validarFormulario()) {
 return
}
 const novoFuncionario = {
 nome : nome.trim(),
 cnpj,
 email: email.trim().toLowerCase(),
 telefone
 }
 aoCadastrar(novoFuncionario)
setMensagemSucesso('Funcionario cadastrado com sucesso!')
setErros({})
setNome('')
setCnpj('')
setEmail('')
setTelefone('')
 }
 return (
 <main className="pagina-clientes">
    <h1>Cadastrar novo funcionario</h1>
    {mensagemSucesso && (
 <p className="mensagem-sucesso">
 {mensagemSucesso}
 </p>
)}
 <form className="formulario-cliente"
onSubmit={cadastrarFuncionario}
noValidate>   
 <label htmlFor="nome">Nome</label>
<input
 id="nome"
 type="text"
 value={nome}
 onChange={(evento) => {
 setNome(evento.target.value)
 limparErro('nome')
  }}
 className={erros.nome ? 'campo-invalido' : ''}
 required
/>
{erros.nome && (
 <span className="mensagem-erro">
 {erros.nome}
 </span>
)}
 <label htmlFor="cnpj">CNPJ</label>
<input
 id="cnpj"
 type="text"
 value={cnpj}
 onChange={(evento) => {
 setCnpj(evento.target.value)
 limparErro('cnpj')
 }}
 className={erros.cnpj ? 'campo-invalido' : ''}
 maxLength="14"
 required
/>
{erros.cnpj && (
 <span className="mensagem-erro">
 {erros.cnpj}
 </span>
)}

 <label htmlFor="telefone">Telefone</label>
<input
 id="telefone"
 type="text"
 value={telefone}
 onChange={(evento) => {
 setTelefone(evento.target.value)
 limparErro('telefone')
 }}
 className={erros.telefone ? 'campo-invalido' : ''}
 placeholder="(11)91234-5678"
 required
/>
{erros.telefone && (
 <span className="mensagem-erro">
 {erros.telefone}
 </span>
)}
<label htmlFor="email">E-mail</label>
<input
 id="email"
 type="email"
 value={email}
 onChange={(evento) => {
 setEmail(evento.target.value)
 limparErro('email')
 }}
 className={erros.email ? 'campo-invalido' : ''}
 required
/>
{erros.email && (
 <span className="mensagem-erro">
 {erros.email}
 </span>
)}
 <button type="submit">Cadastrar funcionario</button>
 </form>
 <Link to="/funcionarios">Voltar para Gerenciamento de Funcionarios</Link>
</main>
 )
}
export default CadastroFuncionario