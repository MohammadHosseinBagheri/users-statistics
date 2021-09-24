const filterAge = (setChartData, array) => {
  return {
    findMaxAges(isSetter = false) {
      let maxAge = -Infinity;
      for (let i of array) {
        if (i["dob"]["age"] > maxAge) {
          maxAge = i.dob.age;
        }
      }
      let filtredAge = array.filter((person) => person.dob.age === maxAge);
      if (isSetter) {
        setChartData({
          labels: filtredAge.map((person) => person.name.last),
          datasets: [
            {
              label: "Ages",
              data: filtredAge.map((person) => person.dob.age),
              backgroundColor: ["#a90d80"],
            },
          ],
        });
      }
      return { maxAge, length: filtredAge.length };
    },
    findMinAges(isSetter = false) {
      let minAge = +Infinity;
      for (let i of array) {
        if (i["dob"]["age"] < minAge) {
          minAge = i.dob.age;
        }
      }
      let filtredAge = array.filter((person) => person.dob.age === minAge);
      if (isSetter) {
        setChartData({
          labels: filtredAge.map((person) => person.name.last),
          datasets: [
            {
              label: "Ages",
              data: filtredAge.map((person) => person.dob.age),
              backgroundColor: ["#a90d80"],
            },
          ],
        });
      }

      return { minAge, length: filtredAge.length };
    },
    resetFilter() {
      setChartData({
        labels: array.map((person) => person.name.last),
        datasets: [
          {
            label: "Ages",
            data: array.map((person) => person.dob.age),
            backgroundColor: ["#a90d80"],
          },
        ],
      });
    },
  };
};

const handleFilterData = (mode, setChartData, array) => {
  const filterWithMode = filterAge(setChartData, array);
  switch (mode) {
    case "1":
      filterWithMode.findMaxAges(true);
      break;
    case "2":
      filterWithMode.findMinAges(true);
      break;
    default:
      filterWithMode.resetFilter();
      break;
  }
};

export { filterAge, handleFilterData };
