//Creating a function that returns our UI using arrow syntax
// We need the div because React components can only return one element but that element can have many child elements.
const AttendanceTracker = () => {
  return (
    <div>
      <h1>Attendance Tracker</h1>
      <p>Welcome to the Innovation Challenge semesterly attendance tracker!</p>
      <p>This app will help track student participation across semesters</p>
    </div>
  );
};

//makes our component available to be imported in other files, this is the main thing the file exports.
export default AttendanceTracker;
