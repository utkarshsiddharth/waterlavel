import { Button } from "@mantine/core";

export default function Demo() {
  return (
    <div className="container mx-auto p-4 space-y-8">
          {/*  Chandigarh to delhi */}
          <h1 className="text-2xl font-bold my-4 text-center">
          Chandigarh to Delhi
        </h1>
      <div className="border p-4">
       

        <div className="md:flex justify-around mt-4 ">
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
      <h1 className="text-2xl font-bold my-4 text-center">
          Delhi to Chandigarh
        </h1>
      {/* delhi to Chandigarh  */}
      <div className="border p-4">
      

        <div className="md:flex justify-around mt-4 ">
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
    </div>
  );
}
