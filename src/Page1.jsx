import { Table, Button } from "@mantine/core";

// Data for Chandigarh to Delhi
const chandigarhToDelhiStations = [
  {
    serialNumber: 1,
    name: "Chandigarh",
    status: "Operational",
    incharge: "123-456-7890",
  },
  {
    serialNumber: 2,
    name: "Ambala",
    status: "Under Maintenance",
    incharge: "234-567-8901",
  },
  {
    serialNumber: 3,
    name: "Kurukshetra",
    status: "Operational",
    incharge: "345-678-9012",
  },
  {
    serialNumber: 4,
    name: "Karnal",
    status: "Closed",
    incharge: "456-789-0123",
  },
  {
    serialNumber: 5,
    name: "Sonipat",
    status: "Operational",
    incharge: "567-890-1234",
  },
  {
    serialNumber: 6,
    name: "Panipat",
    status: "Operational",
    incharge: "678-901-2345",
  },
  {
    serialNumber: 7,
    name: "Delhi",
    status: "Operational",
    incharge: "789-012-3456",
  },
];

// Data for Delhi to Chandigarh
const delhiToChandigarhStations = [
  {
    serialNumber: 1,
    name: "Delhi",
    status: "Operational",
    incharge: "789-012-3456",
  },
  {
    serialNumber: 2,
    name: "Panipat",
    status: "Operational",
    incharge: "678-901-2345",
  },
  {
    serialNumber: 3,
    name: "Sonipat",
    status: "Operational",
    incharge: "567-890-1234",
  },
  {
    serialNumber: 4,
    name: "Karnal",
    status: "Closed",
    incharge: "456-789-0123",
  },
  {
    serialNumber: 5,
    name: "Kurukshetra",
    status: "Operational",
    incharge: "345-678-9012",
  },
  {
    serialNumber: 6,
    name: "Ambala",
    status: "Under Maintenance",
    incharge: "234-567-8901",
  },
  {
    serialNumber: 7,
    name: "Chandigarh",
    status: "Operational",
    incharge: "123-456-7890",
  },
];

export default function Demo() {
  const chandigarhToDelhiRows = chandigarhToDelhiStations.map((station) => (
    <Table.Tr key={station.name}>
      <Table.Td>{station.serialNumber}</Table.Td>
      <Table.Td>{station.name}</Table.Td>
      <Table.Td>{station.status}</Table.Td>
      <Table.Td>{station.incharge}</Table.Td>
    </Table.Tr>
  ));

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
      <div className="md:flex justify-between mt-4 ">
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
