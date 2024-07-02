import { Table, Button, Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  chandigarhToDelhiStations,
  delhiToChandigarhStations,
} from "./component/statioData";
import axios from "axios";
export default function Demo() {
  const [selectedStationIndex, setSelectedStationIndex] = useState(-1);
  const [selectedStation, setSelectedStation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
console.log(status);

  useEffect(() => {
    // Fetch status data when the component mounts
    fetchStatusData();
  }, []);

  const fetchStatusData = () => {
    setLoading(true);
    axios
      .get("http://localhost:5000/get-history")
      .then((response) => {
        setStatus(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching status data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleNextClick = () => {
    setSelectedStationIndex((prevIndex) => {
      const nextIndex =
        prevIndex < chandigarhToDelhiStations.length - 1 ? prevIndex + 1 : 0;
      setSelectedStation(chandigarhToDelhiStations[nextIndex]);
      return nextIndex;
    });
  };

  const handleRowClick = (station, index) => {
    setSelectedStationIndex(index);
    setSelectedStation(station);
  };
  //post api call
  const fetchWaterLevel = (level) => {
    const queryParams = {
      waterLevel: level,
      longitude: selectedStation.longitude,
      latitude: selectedStation.latitude,
    };
    setLoading(true);

    axios
      .post("http://localhost:5000/train-data", null, {
        params: queryParams,
      })

      .then((response) => {
        console.log("Water level data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending water level data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const chandigarhToDelhiRows = chandigarhToDelhiStations.map(
    (station, index) => (
      <Table.Tr
        key={station.name}
        onClick={() => handleRowClick(station, index)}
        style={{
          cursor: "pointer",
          backgroundColor: selectedStationIndex === index ? "#f0f0f0" : "white",
        }}
      >
        <Table.Td>{station.serialNumber}</Table.Td>
        <Table.Td>{station.name}</Table.Td>
        <Table.Td>{station.status}</Table.Td>
        <Table.Td>{station.incharge}</Table.Td>
      </Table.Tr>
    )
  );

  const delhiToChandigarhRows = delhiToChandigarhStations.map((station) => (
    <Table.Tr key={station.name}>
      <Table.Td>{station.serialNumber}</Table.Td>
      <Table.Td>{station.name}</Table.Td>
      <Table.Td>{station.status}</Table.Td>
      <Table.Td>{station.incharge}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="container mx-auto p-4">
      {loading && (
        <div className="loading-overlay">
          <Loader size="xl" />
        </div>
      )}
      {/* Chandigarh to Delhi */}
      <h1 className="text-2xl font-bold my-4 text-center">
        Chandigarh to Delhi
      </h1>
      <div className="flex justify-center items-center mx-8 p-2 border mt-4">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No</Table.Th>
              <Table.Th>Station</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Incharge</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{chandigarhToDelhiRows}</Table.Tbody>
        </Table>
      </div>
      {/* Buttons */}
      <div className="md:flex justify-between mt-4 ">
        <div className="space-x-4 ">
          <Button
            variant="filled"
            color="gray"
            onClick={() => setSelectedStationIndex(-1)}
            disabled={selectedStationIndex === -1}
          >
            Clear
          </Button>
          <Button
            onClick={handleNextClick}
            disabled={selectedStationIndex === -1}
          >
            Next
          </Button>
        </div>
        <div className="space-x-4">
          <Button
            color="gray"
            disabled={selectedStationIndex === -1 || loading}
            onClick={() => fetchWaterLevel("Low")}
          >
            Low
          </Button>
          <Button
            color="yellow"
            disabled={selectedStationIndex === -1 || loading}
            onClick={() => fetchWaterLevel("Medium")}
          >
            Medium
          </Button>
          <Button
            color="red"
            disabled={selectedStationIndex === -1 || loading}
            onClick={() => fetchWaterLevel("High")}
          >
            High
          </Button>
        </div>
      </div>

      {/* Delhi to Chandigarh */}
      <h1 className="text-2xl font-bold my-4 text-center">
        Delhi to Chandigarh
      </h1>
      <div className="flex justify-center items-center mx-8 p-2 border mt-4">
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>No</Table.Th>
              <Table.Th>Station</Table.Th>
              <Table.Th>Status</Table.Th>

              <Table.Th>Incharge</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{delhiToChandigarhRows}</Table.Tbody>
        </Table>
      </div>
      {/* Buttons */}
      <div className="md:flex justify-between mt-4">
        <div className="space-x-4 ">
          <Button variant="filled" color="gray">
            Clear
          </Button>
          <Button>Next</Button>
        </div>
        <div className="space-x-4 ">
          <Button color="gray">Low</Button>
          <Button color="yellow">Medium</Button>
          <Button color="red">High</Button>
        </div>
      </div>
    </div>
  );
}
