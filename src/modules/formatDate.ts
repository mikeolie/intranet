const padTo2Digits = (num: number): string => num.toString().padStart(2, "0")

function formatDate(date: Date | null) {
  const dateToUse = date || new Date()
  return `${[
    dateToUse.getFullYear(),
    padTo2Digits(dateToUse.getMonth() + 1),
    padTo2Digits(dateToUse.getDate()),
  ].join("-")}T${[
    padTo2Digits(dateToUse.getHours()),
    padTo2Digits(dateToUse.getMinutes()),
    padTo2Digits(dateToUse.getSeconds()),
  ].join(":")}`
}

export default formatDate