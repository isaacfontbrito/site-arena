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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const contato = '88996596317'

    const mensagem = `Olá! Gostaria de fazer uma matricula na escolinha de futebol.%0A
    *nome:* ${formData.nome}%0A
    *Telefone:* ${formData.telefone}%0A
    *Idade:* ${formData.idade}`

    const linkWhatsapp = `https://wa.me/${contato}?text=${mensagem}`

    window.open(linkWhatsapp, '_blank')

    return (
        <div className={style.registration} id='registration'>
            
            <div className={style.divForms}>
                <h1>Formulario de matricula</h1>
                <form >
                    <label>Nome Completo:</label>
                    <input type='text' name='nome' value={formData.nome} onChange={handleChange} required/>
                        
                    <label>Telefone:</label>
                    <input type='text' name='telefone' value={formData.telefone} onChange={handleChange} required/>
                        
                    <label>Idade:</label>
                    <input type='number' name='idade' value={formData.idade} onChange={handleChange} required/>

                    <button onSubmit={handleSubmit} type='submit'>Enviar Matrícula <FaFutbol/></button>
                </form>
            </div>        
        </div>
    )
}