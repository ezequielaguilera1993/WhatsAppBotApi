export function viernesAddDays(numberFrydayOfDayInThisMonth: number, addItThisNumOfDays: number) {
    let today = new Date()
    let currenYear = today.getFullYear()
    let currentMonth = today.getMonth() + 1

    let viernesDay = new Date(currenYear, currentMonth, numberFrydayOfDayInThisMonth)

    viernesDay.setDate(viernesDay.getDate() + addItThisNumOfDays);
    return parseInt(viernesDay.toDateString().split(" ")[2])
}







