export function formatDate(now) {
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  const hour = now.getHours()
  const minute = now.getMinutes()

  const timeStr = year + '年' + month + '月' + date + '日' + hour + '时' + minute + '分'
  return timeStr
}
