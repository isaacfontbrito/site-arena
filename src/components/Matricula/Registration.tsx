import * as React from 'react'
import style from './Registration.module.css'
import { useState } from 'react'
import { FaFutbol } from 'react-icons/fa'

export function Registration() {
    const [ formData, setFormData] = useState({
        nome: '',
        telefone: '',
        idade: '',
    })

    const [bloqueado, setBloqueado] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        })
        setBloqueado(true)
        
    }

    

    const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()

            if (bloqueado && formData.nome && formData.telefone && formData.idade) {
        
                const contato = '+5588996617414'
                
                const mensagem = `Olá! Gostaria de fazer uma matricula na escolinha de futebol.%0A
                *nome:* ${formData.nome}%0A
                *Telefone:* ${formData.telefone}%0A
                *Idade:* ${formData.idade}%0A`
                
                const linkWhatsapp = `https://wa.me/${contato}?text=${mensagem}`
                
                window.open(linkWhatsapp, '_blank')
            } else {
                alert(' Preencha todos os campos antes de enviar!')
            }
    }



    return (
        <div className={style.registration} id='registration'>
            
            <div className={style.divForms}>
                <h1>Formulario de matricula</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nome Completo:</label>
                    <input type='text' name='nome' value={formData.nome} onChange={handleChange} required placeholder='Digite seu nome aqui!'/>
                        
                    <label>Telefone:</label>
                    <input type='text' name='telefone' value={formData.telefone} onChange={handleChange} required placeholder='Contato'/>
                        
                    <label>Idade:</label>
                    <input type='number' name='idade' value={formData.idade} onChange={handleChange} required placeholder='Sua idade'/>

                    <button type='submit'>Enviar Matrícula <FaFutbol/></button>
                </form>
            </div>        
        </div>
    )
}