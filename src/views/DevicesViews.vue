<script setup>
import { ref } from 'vue'
import { getSubDocument,updateSubCollection } from '@/firebase'
import { useRoute } from 'vue-router'

const params = useRoute()
const device = ref(null)




getSubDocument('espacios', params.params.id, 'Devices', params.params.device, async (data) => {
    device.value = { id: data.id, ...data.data() }
})

const updateSensor = async (id1,id, data) => {
  try {
    if (device.value && device.value.name) {
      console.log('Antes de la actualización:', device.value);
      await updateSubCollection('espacios', id1, 'Devices', id, data);
      console.log('Después de la actualización:', device.value);
    } else {
      console.error('Nombre del dispositivo no disponible');
    }
  } catch (error) {
    console.error('Error durante la actualización:', error);
  }
}
const updateEjecutor = async (id1,id, data) => {
  try {
    if (device.value && device.value.name) {
      console.log('Antes de la actualización:', device.value);
      await updateSubCollection('espacios', id1, 'Devices', id, data);
      console.log('Después de la actualización:', device.value);
    } else {
      console.error('Nombre del dispositivo no disponible');
    }
  } catch (error) {
    console.error('Error durante la actualización:', error);
  }
}

const handleSubmit = () => {
    if(device.value.device === 'sensor') updateSensor(params.params.id,device.value.id,{ name: device.value.name })
    else
    updateEjecutor(params.params.id,device.value.id,device.value)
    
}
</script>
  
<template>
    <div class="container">
        <h1 class="title">{{ device ? device.name : 'Loading...' }}</h1>
        <div v-if="device" class="content">
            <h2 class="subtitle">{{ device.type }}</h2>
            <div class="form">
            <form @submit.prevent="handleSubmit"> 
                    <div v-if="device.device === 'sensor'" class="form-group">
                        <input type="text" id="deviceName" v-model="device.name" class="input" />
                        <button type="submit" class="submit-button sensor-button">Update
                            Sensor</button>
                    </div>
                    <div v-else-if="device.device === 'ejecutor'" class="form-group">
                        <h2 class="subtitle">{{ device.status }}</h2>
                        
                        <input type="checkbox" id="deviceStatus" :checked="device.status" v-model="device.status"
                            @click="device.status=!device.status" class="checkbox" />
                        <label for="deviceStatus" class="label">Activar/Desactivar</label>
                        <button type="submit" class="submit-button ejecutor-button">Update
                            Executer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  

<style lang="css">
.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
}

.title {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
}

.content {
    text-align: center;
}

.subtitle {
    font-size: 1.25rem;
    font-weight: bold;
}

.form {
    margin-top: 1rem;
}

.form-group {
    margin-top: 1rem;
}

.label {
    display: block;
    color: #4a5568;
    font-size: 0.875rem;
    font-weight: medium;
    margin-bottom: 0.5rem;
}

.input {
    border: 1px solid #e2e8f0;
    border-radius: 0.375rem;
    padding: 0.5rem;
    width: 100%;
    outline: none;
}

.checkbox {
    margin-right: 0.5rem;
}

.submit-button {
    background-color: #2d3a4b;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #1f2a36;
}

.sensor-button {
    background-color: #4caf50;
}

.ejecutor-button {
    background-color: #ff9800;
}
</style>
  