function throttle(func, delay = 300) {
  let previous = 0, Timer = null
  function throttled(...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date()

    // ------ 新增部分 start ------
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
    if (now - previous < delay) {
      // 如果小于，则为本次触发操作设立一个新的定时器
      // 定时器时间结束后执行函数 func
      if (Timer) clearTimeout(Timer)
      Timer = setTimeout(() => {
        previous = now
        func.apply(this, args)
      }, delay)
      // ------ 新增部分 end ------
    } else {
      // 第一次执行
      // 或者时间间隔超出了设定的时间间隔，执行函数 func
      previous = now
      func.apply(this, args)
    }
  }
  throttled.cancel = function () {
    clearTimeout(Timer)
  }
  return throttled
}
