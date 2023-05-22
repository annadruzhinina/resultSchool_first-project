function getDaysBeforeBirthday(day, month, year) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthdayThisYear = new Date(currentYear, month - 1, day);

  if (birthdayThisYear < today) {
    // If birthday has already occurred this year, calculate for next year
    const nextYear = currentYear + 1;
    const nextBirthday = new Date(nextYear, month - 1, day);
    const timeDifference = nextBirthday.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  const timeDifference = birthdayThisYear.getTime() - today.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

console.log(getDaysBeforeBirthday(28, 5, 2023));
