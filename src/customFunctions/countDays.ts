const countDays = (dateString: string) => {
  const date = new Date(dateString);
  const timeDifference = Date.now() - date.getTime();
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const formattedDate =
    daysAgo === 0
      ? "Today"
      : daysAgo === 1
      ? "Yesterday"
      : `${daysAgo} days ago`;

  return formattedDate;
};

export default countDays;
