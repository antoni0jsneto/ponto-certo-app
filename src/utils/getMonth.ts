export const getCurrentAndNextMonth = () => {
  const currentDate = new Date();

  const currentMonth = currentDate.getMonth() + 1;
  const nextMonth = (currentMonth % 12) + 1;

  const formattedCurrentMonth = String(currentMonth).padStart(2, '0');
  const formattedNextMonth = String(nextMonth).padStart(2, '0');

  return {
    currentMonth: formattedCurrentMonth,
    nextMonth: formattedNextMonth,
  };
};
