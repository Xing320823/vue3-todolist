<template>
  <el-form
    ref="formRef"
    :model="form"
    :rules="rules"
    label-position="top"
    size="small"
    @submit.prevent="handleSubmit"
    class="add-form"
  >
    <el-form-item class="name">
      <el-input
        v-model="form.name"
        placeholder="Enter name"
        clearable
      />
    </el-form-item>
    <el-form-item class="btn">
      <el-button type="primary" native-type="submit">
        Add task
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
  import { reactive, ref } from "vue";
  import { ElForm } from 'element-plus';  // 引入 ElForm 类型

  const form = reactive<{ name: string }>({ name: '' });
  const formRef = ref<InstanceType<typeof ElForm> | null>(null);  // 使用 InstanceType

  const emit = defineEmits<(e: 'add-item', name: string) => void>();

  const rules = {
    name: [
      { required: true, message: 'Name is required', trigger: 'blur' }
    ],
  };

  function handleSubmit() {
    if (!formRef.value) return;  // Ensure formRef is not null before proceeding

    formRef.value?.validate((valid: boolean) => {  // Safely call validate with optional chaining
      if (!valid) return;

      emit('add-item', form.name);

      form.name = '';

      formRef.value?.clearValidate();  // Safely call clearValidate with optional chaining
    });
  }
</script>

<style scoped>
.add-form {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #ffffff;
}

.name {
  flex: 1 1 auto;
}

.btn {
  flex: 0 0 auto;
}
</style>