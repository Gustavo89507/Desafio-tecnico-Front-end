import { useState } from 'react'
import { Link } from 'react-router'
function CadastroCliente({ aoCadastrar, clientes }) {
 const [nome, setNome] = useState('')
 const [cpf, setCpf] = useState('')
 const [telefone, setTelefone] = useState('')
 const [email, setEmail] = useState('')
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
 if (!/^\d{11}$/.test(cpf)) {
 novosErros.cpf =
 'O CPF deve possuir exatamente 11 números.'
 }
 const cpfDuplicado = clientes.some(
 (cliente) => cliente.cpf === cpf
)
if (cpfDuplicado) {
 novosErros.cpf =
 'Já existe um cliente cadastrado com este CPF.'
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
 const emailDuplicado = clientes.some(
 (cliente) =>
 cliente.email.toLowerCase() ===
 emailTratado.toLowerCase()
)
if (emailDuplicado) {
 novosErros.email =
 'Já existe um cliente cadastrado com este e-mail.'
}
 setErros(novosErros)
 return Object.keys(novosErros).length === 0
}
 function cadastrarCliente(evento) {
 evento.preventDefault()
 setMensagemSucesso('')
 if (!validarFormulario()) {
 return
}
 const novoCliente = {
 nome : nome.trim(),
 cpf,
 telefone,
 email: email.trim().toLowerCase(),
 }
 aoCadastrar(novoCliente)
setMensagemSucesso('Cliente cadastrado com sucesso!')
setErros({})
setNome('')
setCpf('')
setTelefone('')
setEmail('')
 }
 return (
 <main className="pagina-clientes">
    <h1>Cadastrar novo cliente</h1>
    {mensagemSucesso && (
 <p className="mensagem-sucesso">
 {mensagemSucesso}
 </p>
)}
 <form className="formulario-cliente"
onSubmit={cadastrarCliente}
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
 <label htmlFor="cpf">CPF</label>
<input
 id="cpf"
 type="text"
 value={cpf}
 onChange={(evento) => {
 setCpf(evento.target.value)
 limparErro('cpf')
 }}
 className={erros.cpf ? 'campo-invalido' : ''}
 maxLength="11"
 required
/>
{erros.cpf && (
 <span className="mensagem-erro">
 {erros.cpf}
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
 <button type="submit">Cadastrar cliente</button>
 </form>
 <Link to="/clientes">Voltar para Gerenciamento de
Clientes</Link>
</main>
 )
}
export default CadastroCliente