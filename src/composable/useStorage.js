import { ref, watch } from "vue";

export function useStorage(key, initialValue) {
  // Lấy giá trị từ localStorage và lưu vào val
  let storedVal = localStorage.getItem(key);
  let val;

  if (storedVal !== null) {
    val = ref(storedVal);
  } else {
    val = ref(initialValue);
    write();
  }

  // Theo dõi sự thay đổi của `val` và cập nhật `localStorage`
  watch(val, () => {
    write();
  });

  function write() {
    if (val.value === '') {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, val.value);
    }
  }

  return val;
}
