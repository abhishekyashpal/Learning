// Example array of days
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Example switch loop
for (let i = 0; i < days.length; i++) {
  switch (days[i]) {
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
      console.log(`${days[i]} is a weekday.`);
      break;
    case 'Saturday':
    case 'Sunday':
      console.log(`${days[i]} is a weekend day.`);
      break;
    default:
      console.log(`Unexpected value: ${days[i]}`);
  }
}
