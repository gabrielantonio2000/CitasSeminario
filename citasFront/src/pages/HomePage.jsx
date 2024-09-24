import {
  Tabs,
  Tab,
  Button,
  Card,
  CardBody,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import imagenBarberia from "../assets/barberia.jpg";

function HomePage() {
  const [selectedTab, setSelectedTab] = useState("step1");

  // servicios
  const [servicios] = useState([
    {
      id: 1,
      nombre: "Prueba.Fade",
      
    },
    {
      id: 2,
      nombre:"Taper Fade"
    }
  ]);
  // proveedores
  const [proveedores] = useState([
    {
      id: 1,
      nombre: "Gabriel",
    },
  ]);

  return (
    <>
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={imagenBarberia}
          alt=""
        />
      </div>
      <div className="flex w-full py-36">
        <Card className=" mx-auto p-10 lg:w-[700px] md:w-[700px] ">
          <CardBody className="">
            <form>
              <Tabs
                fullWidth
                size="md"
                aria-label="Tabs form"
                selectedKey={selectedTab}
                onSelectionChange={setSelectedTab}
              >
                
                <Tab key="step1" title="Paso uno">
                  <div className="flex flex-col gap-4">
                    <h4
                      style={{ padding: "20px 0 0 0" }}
                      className="font-bold text-large text-center"
                    >



                      Seleccionar Corte y Barbero
                    </h4>
                    <div className="flex gap-10 py-3 justify-between items-center flex-col md:flex-row md:items-start lg:flex-row lg:items-start">
                      <Select
                        labelPlacement={"inside"}
                        label="corte"
                        className="max-w-xs"
                        isRequired
                        disallowEmptySelection
                      >
                        {servicios.map((servicio) => (
                          <SelectItem key={servicio.id}>
                            {servicio.nombre}
                          </SelectItem>
                        ))}
                      </Select>

                      <Select
                        labelPlacement={"inside"}
                        label="barbero"
                        className="max-w-xs"
                        isRequired
                        disallowEmptySelection
                      >
                        {proveedores.map((proveedor) => (
                          <SelectItem key={proveedor.id}>
                            {`${proveedor.nombre}`}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <Button
                        color="primary"
                        onClick={() => setSelectedTab("step2")}
                      >
                        Continuar
                      </Button>
                    </div>
                  </div>
                </Tab>
                <Tab key="step2" title="Paso dos"></Tab>
                <Tab key="step3" title="Paso tres"></Tab>
                <Tab key="step4" title="Paso cuatro"></Tab>
              </Tabs>
            </form>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default HomePage;
