export function leftPad(number, targetLength) {
  var output = number + "";
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return output;
}

export function subtractDaysFromNow(days) {
  const d = new Date(Date.now());
  d.setDate(d.getDate() - days);
  return d;
}

export function formatDateForGithub(date) {
  return `${date.getFullYear()}-${leftPad(date.getMonth() + 1, 2)}-${leftPad(
    date.getDate(),
    2
  )}`;
}
