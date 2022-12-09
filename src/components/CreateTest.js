import { observer } from "mobx-react";
import { data } from "../stores/data";
import { getData } from "../utils/getData";

// this is a list of 100 Potential searches
const searchList = [
  "Houston",
  "Miami",
  "New York",
  "Tampa",
  "Los Angeles",
  "Austin",
];

function CreateTest() {
  const stats = data;
  // this function retrieves data entities using the FAQX Search API, and stores it in the store
  async function fetchData() {
    // start timer
    const startTime = performance.now().toFixed(4);
    // loop through searchlist
    searchList.forEach(async (item) => {
      // perform search based on item
      const data = await getData(item);
      if (data) {
        stats.setEntities(data);
      }
    });
    const endTime = performance.now().toFixed(4);
    const totalTime = (endTime - startTime).toFixed(4);
    stats.setTime(totalTime);
    stats.setStatus("Completed");
    //
  }
  return (
    <div>
      <p>
        <strong>Entity Count: </strong>

        {stats.entities.length}
      </p>
      <p>
        <strong>Time (ms): </strong>
        {stats.time}
      </p>
      <p>
        <strong>Status: </strong>
        {stats.status}
      </p>
      <button onClick={() => fetchData()}>Update</button>
      <button onClick={() => stats.deleteData()}>Delete</button>
    </div>
  );
}

export default observer(CreateTest);
