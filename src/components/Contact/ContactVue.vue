<template>
    <div class="contact animate__animated animate__fadeIn">
        <h2><icon :icon="['far', 'envelope']" class="icon"/></h2>
        <h1>Entrar em contato</h1>
        <h4>Vamos trabalhar juntos!</h4>
        <form @submit.prevent="submit">
            <v-text-field label="Nome" 
            v-model="name.value.value" :error-messages="name.errorMessage.value"/>
            
            <v-text-field label="E-mail" 
            v-model="email.value.value" :error-messages="email.errorMessage.value"/>

            <v-text-field label="Telefone"
            v-model="phone.value.value" :error-messages="phone.errorMessage.value"/>

            <v-textarea label="Mensagem"
            v-model="message.value.value" :error-messages="message.errorMessage.value"/>

            <v-btn class="btn" type="submit">Enviar</v-btn>
        </form>
    </div>
</template>

<script setup>
  import { useField, useForm } from 'vee-validate'
  import { axiosInstance } from '@/plugins/axios'
  import { notyf } from '@/plugins/notyf'

  const { handleSubmit, resetForm } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Nome precisa ter mais de 2 dígitos.'
      },
      phone (value) {
        if (/^[0-9-]{7,}$/.test(value)) return true

        return 'Precisa de um telefone válido.'
      },
      email (value) {
        if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Precisa de um e-mail válido.'
      },
      message (value) {
        if (value) return true

        return 'Escreva uma mensagem.'
      }
    },
  })

  const name = useField('name')
  const phone = useField('phone')
  const email = useField('email')
  const message = useField('message')

  async function sendForm(data) {
    try {
        await axiosInstance.post('', data)

        notyf.success('Formulário enviado com sucesso!')
        resetForm()
    } catch (error) {
        console.error('Erro ao enviar o formulário:', error)

        notyf.error('Falha ao enviar o formulário. Tente novamente.')
    }
  }

  const submit = handleSubmit(values => {
      sendForm(values)
  })
  
</script>

<style scoped>
    .contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F5F5F5;
        width: 80%;
        padding: 30px;
        margin: 70px;
        border-radius: 20px;
    }

    .contact h1 {
        font-family: "Plus Jakarta Sans";
        font-size: 40px;
    }

    .contact .icon{
        color: white;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.8rem;
        margin-right: 10px;
        background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    }

    .contact h4 {
        font-family: "Plus Jakarta Sans";
        font-size: 18px;
        font-weight: 500;
        opacity: 0.6;
    }

    .contact form {
        width: 40%;
        margin-top: 40px;
    }

    .contact .btn{
        width: 100%;
        font-size: 15px;
        color: #F5F5F5;
        background-color: #1e30f3;
    }

    @media (max-width: 768px) {
        .contact {
            width: 90%;
            margin: 40px;
            padding: 20px;
        }
        .contact h4 { font-size: 10px; }
        .contact h1 { font-size: 18px; }
        .contact .icon { font-size: 15px; }
        .contact form { width: 90%; }
    }
</style>