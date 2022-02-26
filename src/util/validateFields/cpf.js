
const cpfIsValid = (cpf) => {
    if(cpf.length != 11){
        setInputError('CPF deve ter 11 digitos')
        return
      }
    if(typeof cpf != "number")
      setInputError('')
}