const getDateColumn = (data) => {
  const dates = data.filter((r) => {
    if (r.column === 'A') {
      return r;
    }
  }).filter((date) => {
    if (date.content.search(/16/) != -1) {
      return date;
    }
  });

  return dates;
};

const getNextLunch = (dates) => {
  const now = new Date();

  const nextDates = dates.filter((x) => {
    const date = new Date(x.content);
    if (date > now) {
      return x;
    }
  });

  //return first date that is after now
  return nextDates[0];
};


export { getNextLunch, getDateColumn };
