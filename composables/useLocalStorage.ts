export function useLocalStorage<T>(key: string, initialValue: T) {
    const storedValue = ref<T>(initialValue)
  
    onMounted(() => {
      const item = localStorage.getItem(key)
      if (item) {
        storedValue.value = JSON.parse(item)
      }
    })
  
    watch(storedValue, (val) => {
      localStorage.setItem(key, JSON.stringify(val))
    }, { deep: true })
  
    return storedValue
  }
  