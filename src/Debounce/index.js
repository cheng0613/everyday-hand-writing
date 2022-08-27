function debounce(func, delay = 300, immediate = true) {
  let Timer = null
  function debounced(...args) {
    if (Timer) {
      clearTimeout(Timer)
    }
    if (!Timer && immediate) {
      func.apply(this, args)
    }
    Timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }

  debounced.cancel = function () {
    clearTimeout(Timer)
  }

  return debounced
}